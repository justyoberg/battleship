const Ship = (length) => {

  let hits = 0;
  let sunk = false;
  
  const hit = () => {
    hits++;
    sunk = isSunk();
  }

  const isSunk = () => {
    return hits >= length;
  }

  const status = () => {
    return `Hits: ${hits}, Sunk: ${sunk}`
  }
  
  return { hit, status }

}