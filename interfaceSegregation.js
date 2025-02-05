"use strict";
const movie2 = {
    genre: "action",
    name: "starwars",
    rating: 10,
    printMovieInfo(name, price, rating) {
        return `movie name: ${name} / price: ${price} / rating: ${rating}`;
    },
};
console.log(movie2.printMovieInfo("arrows", 1000, 15));
const newCar = {
    model: "filder",
    start() {
        console.log("starting");
    },
    brand: "toyota",
    stop() {
        console.log("stopping");
    },
};
newCar.start();
