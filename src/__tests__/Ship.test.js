import Ship from "../Ship.js"

test("Should return `Hits: 3, Sunk: false, Length: 5`", () => {
  let myShip = Ship(5);
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.status()).toBe("Hits: 3, Sunk: false, Length: 5");
})

test("Should return `Hits: 2, Sunk: false, Length: 6`", () => {
  let myShip = Ship(6);
  myShip.hit();
  myShip.hit();
  expect(myShip.status()).toBe("Hits: 2, Sunk: false, Length: 6");
})

test("Should return `Hits: 2, Sunk: true, Length: 2`", () => {
  let myShip = Ship(2);
  myShip.hit();
  myShip.hit();
  expect(myShip.status()).toBe("Hits: 2, Sunk: true, Length: 2");
})
