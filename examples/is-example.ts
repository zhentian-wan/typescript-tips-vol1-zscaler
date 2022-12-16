interface CarLike {
  make: string;
  model: string;
  year: number;
}

function isCarLike(
  maybeCar: any // should be flexable
): maybeCar is CarLike {
  // should be strict
  return (
    maybeCar &&
    typeof maybeCar === "object" &&
    "make" in maybeCar &&
    typeof maybeCar["make"] === "string" &&
    "model" in maybeCar &&
    typeof maybeCar["model"] === "string" &&
    "year" in maybeCar &&
    typeof maybeCar["year"] === "number"
  );
}

let maybeCar: unknown;
// using the guard
if (isCarLike(maybeCar)) {
  maybeCar; // CarLike
}
