function generateRandomNumbersArray(n) {
  let ticketArr = new Array(n);
  for (let itr = 0; itr < n; itr++) {
    ticketArr[itr] = Math.floor(Math.random() * 10);
  }
  return ticketArr;
}

function getSum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

export { generateRandomNumbersArray, getSum };
