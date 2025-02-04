interface movieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo(name: string, price: number, rating: number): string | number;
}
interface movieGenre extends movieDetails {
  genre: string;
}
const movie2: movieGenre = {
  genre: "action",
  name: "starwars",
  rating: 10,
  printMovieInfo(name: string, price: number, rating: number): string | number {
    return `movie name: ${name} / price: ${price} / rating: ${rating}`;
  },
};
console.log(movie2.printMovieInfo("arrows", 1000, 15));

// declaration merging/reopening/interfacesegregation
interface Car {
  model: string;
  start(): void;
}
interface Car {
  brand: string;
  stop(): void;
}
const newCar: Car = {
  model: "filder",
  start(): void {
    console.log("starting");
  },
  brand: "toyota",
  stop(): void {
    console.log("stopping");
  },
};
newCar.start();
