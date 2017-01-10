import React from 'react';
import DisplaySection from './DisplaySection'

const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
}

export default class Application extends React.Component {
  constructor() {
    super()
    this.state = {
      draftWord: '',
      word: '',

    }
  }

  getWord(e) {
    this.setState({ draftWord: e.target.value})
  }

  scoreWord(draftWord, letterScores) {
    this.setState({ word: this.state.draftWord })
    const setWord = this.state.draftWord
    const word = setWord.toUpperCase().trim().split('')
    console.log(word)
  }

  render() {
    return(
      <div>
        <input
          className='word-input'
          placeholder='enter word'
          onChange={this.getWord.bind(this)}>
          </input>
        <button
          className='submit-button'
          onClick={this.scoreWord.bind(this)}>Submit
        </button>
        <DisplaySection
          word={this.state.word}
        />
      </div>
    )
  }
}
