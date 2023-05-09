var User = /** @class */ (function () {
    function User(name, age, birthday) {
        this.name = name;
        if (age) {
            this.age = age;
        }
        else if (birthday) {
            var birthdayDate = new Date(birthday);
            var ageInMilliSeconde = Date.now() - birthdayDate.getTime();
            this.age = Math.floor(ageInMilliSeconde / 1000 / 60 / 60 / 24 / 365);
        }
    }
    return User;
}());
// challenge.ts
var prettyPrintWilder = function (users) {
    users.map(function (user) {
        console.log("".concat(user.name, " is ").concat(user.age, " years old"));
    });
};
var wilders = [];
var user1 = new User("Pierre", 23, undefined);
var user2 = new User("Paul", undefined, "10/02/1990");
var user3 = new User("Jacques", 25, undefined);
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
