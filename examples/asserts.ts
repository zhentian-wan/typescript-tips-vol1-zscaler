interface CarLike {
  make: string;
  model: string;
  year: number;
}

function assertsCarLike(
  maybeCar: any
): asserts maybeCar is CarLike {
  if (
    !(
      maybeCar &&
      typeof maybeCar === "object" &&
      "make" in maybeCar &&
      typeof maybeCar["make"] === "string" &&
      "model" in maybeCar &&
      typeof maybeCar["model"] === "string" &&
      "year" in maybeCar &&
      typeof maybeCar["year"] === "number"
    )
  ) {
    throw new Error(
      `Value does not appear to be a CarLike ${maybeCar}`
    );
  }
}

function buyCar(car: CarLike | undefined) {
  assertsCarLike(car); // will throw if assertion failed
  //             ^?  CarLike | undefined
  requestBuyCar(car);
  //            ^?   CarLike
}

declare function requestBuyCar(car: CarLike): void;
