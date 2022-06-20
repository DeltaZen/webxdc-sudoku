import { getSudoku } from 'sudoku-gen'
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'

// const [temporaryInitArray, temporarySolvedArray] = getUniqueSudoku(difficulty, e)

const getUniqueSudoku = (difficulty: Difficulty, e?: React.ChangeEvent<HTMLSelectElement>) => {
  let currentDifficulty = difficulty
  if (e)
    currentDifficulty = e.target.value as Difficulty
  // currentDifficulty = 'easy'
  const sudoku = getSudoku(currentDifficulty)
  const initArray = sudoku.puzzle.replace(/\-/g, '0').split('')
  const solvedArray = sudoku.solution.split('')
  // eslint-disable-next-line no-console
  console.log(initArray)
  return [initArray, solvedArray]
}

export default getUniqueSudoku