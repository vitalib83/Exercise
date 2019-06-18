class Account {
    constructor(sum) {
        this.sum = sum;
    }

    deposit(value) {
        this.sum += value;
    }

    canWithdraw(withdrawl) {
        return this.sum - withdrawl > 0;
    }

    withdraw(value) {
        if (this.canWithdraw(value) && value > 0) {
            this.sum -= value;
        }
    }
}

function lottery(account) {
    if (!account.canWithdraw(100)) {
        console.log("Not enough money to participate in the lottery");
        return;
    }
    var sum = Math.round(Math.random() * 100);
    var isWon = !!Math.round(Math.random());
    if (isWon) {
        account.deposit(sum + 20);
    } else {
        account.withdraw(sum);
    }
}

var gamble = new Account(100);
for (var i = 0; i < 5; i++) {
    lottery(gamble);
}
console.log(gamble.sum);