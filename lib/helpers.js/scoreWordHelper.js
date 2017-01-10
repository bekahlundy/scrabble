const scoreWordHelper = (setWord, num, letterScores) => {
  let word = setWord.toUpperCase().trim().split('')
  let score = 0
  word.forEach((letter) => {
    score += letterScores[letter];
  })
  console.log(score)
  return score;
}


export default scoreWordHelper;
