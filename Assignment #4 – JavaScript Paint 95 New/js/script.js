var canvas;
var context;
var canvasDiv;
var radius = 10;
var dragging = false;
var color = "black";

var minRad = 1;
var maxRad = 50;
var step = 1;

var rad_val;
var rad_inc;
var rad_dec;

function putPoint(event) {
  if (!dragging) return;

  context.lineTo(event.clientX, event.clientY);
  context.stroke();
  context.beginPath();
  context.arc(event.clientX, event.clientY, radius, 0, Math.PI * 2);
  context.fill();
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
}

function updateColor() {
  context.strokeStyle = color;
  context.fillStyle = color;
}

function updatePen() {
  context.lineWidth = radius * 2;
  $("#radius-value").text(radius);
}

function resize(keepCanvas) {
  if (keepCanvas) var data = canvas.toDataURL();

  canvas.width = 500;
  canvas.height = 500;
  updatePen();

  if (keepCanvas) {
    var img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0);
    };
    img.src = data;
  }
}

function engage(e) {
  dragging = true;
  putPoint(e);
}

function disengage() {
  dragging = false;
  context.beginPath();
}

function clearCanvas() {
  resize(false);
}

function setRadius(val) {
  radius = Math.min(Math.max(val, minRad), maxRad);
  updatePen();
}

function incRadius() {
  setRadius(radius + step);
}

function decRadius() {
  setRadius(radius - step);
}

function changeColor() {
  $(".color.active").removeClass("active");
  $(this).addClass("active");
  color = $(this).attr("data-color");
  updateColor();
}

function selectRightColor() {
  var active = $(".color.active");

  if (active.is(":last-child")) {
    changeColor.call($(".color:first-child")[0]);
  } else {
    changeColor.call($(".color").eq(active.index() + 1)[0]);
  }
}

function selectLeftColor() {
  var active = $(".color.active");

  if (active.is(":first-child")) {
    changeColor.call($(".color:last-child")[0]);
  } else {
    changeColor.call($(".color").eq(active.index() - 1)[0]);
  }
}

function saveImage() {
  var data = canvas.toDataURL();

  var link = document.createElement("a");
  link.download = "image.png";
  link.href = data;
  link.click();
}

$(document).ready(function() {
  var canvasDiv = document.getElementById("canvasDiv");
  canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas");
  canvasDiv.appendChild(canvas);
  if (typeof G_vmlCanvasManager != "undefined") {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }

  context = canvas.getContext("2d");

  resize();
  updateColor();

  document.addEventListener("mousedown", engage);
  document.addEventListener("mouseup", disengage);
  document.addEventListener("mousemove", putPoint);
  window.onresize = function() {
    resize(true);
  };

  $("#clear-button").click(clearCanvas);

  rad_val = document.getElementById("radius-value");
  rad_inc = document.getElementById("radius-inc");
  rad_dec = document.getElementById("radius-dec");

  $(rad_inc).click(incRadius);
  $(rad_dec).click(decRadius);

  var $colors = $(".color");
  $colors.each(function() {
    $(this).css("background-color", $(this).attr("data-color"));
    if ($(this).attr("data-color") === color) $(this).addClass("active");
  });
  $colors.click(changeColor);

  $("#save-button").click(saveImage);

  $(document).keydown(function(e) {
    switch (event.which) {
      case 38:
        incRadius();
        break;
      case 40:
        decRadius();
        break;

      case 37:
        selectLeftColor();
        break;
      case 39:
        selectRightColor();
        break;
    }
  });
});
