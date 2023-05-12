const getLotteryNumbers = (numbersArr) => {
  const lotteryNumbers = [];
  numbersArr.forEach((numbers) => {
    lotteryNumbers.push(Math.floor(Math.random() * 5))
  });
  return lotteryNumbers;
};

const getLotteryTicket = (ticket) => {
  const lotteryNumbers = getLotteryNumbers(ticket);
  if (ticket[0] === lotteryNumbers[0]) return 'Infelizmente não foi dessa vez, continue apostando!';
  if (ticket[1] === lotteryNumbers[1]) return 'Infelizmente não foi dessa vez, continue apostando!';
  if (ticket[2] === lotteryNumbers[2]) return 'Infelizmente não foi dessa vez, continue apostando!';
  if (ticket[3] === lotteryNumbers[3]) return 'Infelizmente não foi dessa vez, continue apostando!';
  if (ticket[4] === lotteryNumbers[4]) return 'Infelizmente não foi dessa vez, continue apostando!';
  return 'Parabéns, você ganhou';
};

console.log(getLotteryTicket([1, 2, 3, 4, 5]));