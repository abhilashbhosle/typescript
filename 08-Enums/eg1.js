// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
var Seats;
(function (Seats) {
    Seats[Seats["AISLE"] = 0] = "AISLE";
    Seats[Seats["MIDDLE"] = 1] = "MIDDLE";
    Seats[Seats["WINDOW"] = 2] = "WINDOW";
})(Seats || (Seats = {}));
var mySeat = Seats.AISLE;
