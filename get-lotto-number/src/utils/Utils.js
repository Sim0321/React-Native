export const getRandomSixNumber = () => {
  const numberArray = [];

  while (numberArray.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1;

    if (!numberArray.includes(number)) {
      numberArray.push(number);
    }
  }

  const sortedNumberArray = numberArray.sort((a, b) => a - b);

  // 보너스 번호 추가
  let bonusNumber;
  do {
    bonusNumber = Math.floor(Math.random() * 45) + 1;
  } while (sortedNumberArray.includes(bonusNumber));

  // 보너스 번호를 마지막에 추가하여 정렬되지 않게
  return [...sortedNumberArray, bonusNumber];
};
