$(document.body).append($('<ul/>'));
for (var i = 1; i < 6; i++) {
var item = $("<li/>").text("list-item " + i);
var item = $("<li/>").text("list-item " + i);
$("ul").append(item);
}