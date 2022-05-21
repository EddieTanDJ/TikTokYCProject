import React, { Component} from 'react';
import axios from 'axios';

import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';

let gameStat;
let score = 0;

class Hangman extends Component {
	static defaultProps = {
		maxWrong: 6,
		images: [step0, step1, step2, step3, step4, step5, step6],
	};

	constructor(props) {
		super(props);
		this.state = {
			mistake: 0,
			guessed: new Set(),
			answer: " ",
		};
		this.handleGuess = this.handleGuess.bind(this);
		this.keyPress = this.keyPress.bind(this);
		window.addEventListener('keydown', this.keyPress);
    this.nextButton = this.nextButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
	}

	guessedWord() {
		return this.state.answer
			.split('')
			.map((bingo) => (this.state.guessed.has(bingo) ? bingo : '_'));
	}
  // TODO: Add more categories of the hangman
	componentWillMount() {
		axios
			.get('/programming')
			.then((res) => {
				console.log(res.data);
				this.setState({
					answer: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleGuess(value) {
		let letter = value;
		this.setState((st) => ({
			guessed: st.guessed.add(letter),
			mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
		}));
	}

	keyPress(event) {
		/**
		 * 8 = backspace
		 * 13 = enter
		 * 32 = space
		 * 65 = A (Capital)
		 * 90 = Z (Capital)
		 * 97 = a (Small)
		 * 122 = z (Small)
		 */
		if (gameStat === 'YOU WON' || gameStat === 'YOU LOST') {
			if (
				event.keyCode === 8 ||
				event.keyCode === 13 ||
				event.keyCode === 32
			) {
				this.resetButton();
			}
		} else if (
			(event.keyCode >= 65 && event.keyCode <= 90) ||
			(event.keyCode >= 97 && event.keyCode <= 122)
		) {
			this.handleGuess(event.key);
		} else if (
			event.keyCode === 8 ||
			event.keyCode === 13 ||
			event.keyCode === 32
		) {
			this.resetButton();
		} else {
		}
	}
	generateButtons() {
		return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
			<button
				key={letter}
				value={letter}
				onClick={(e) => this.handleGuess(e.target.value)}
				disabled={this.state.guessed.has(letter)}
			>
				{letter}
			</button>
		));
	}

	resetButton = () => {
    axios.get('/programming')
    .then((res) => {
      console.log(res.data);
      this.setState({
        mistake: 0,
        guessed: new Set(),
        answer: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
    score = 0;
		console.log(score);
		console.log(this.state.answer);
	};

	nextButton = () => {
    axios.get('/programming')
    .then((res) => {
      console.log(res.data);
      this.setState({
        mistake: 0,
        guessed: new Set(),
        answer: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
		console.log(score);
		console.log(this.state.answer);
	};


	render() {
    const { mistake, answer } = this.state;
    const { maxWrong, images } = this.props;
    const gameOver = mistake >= maxWrong;
    const altText = `${mistake}/${maxWrong} wrong guesses`;
    let Button;
    const isWinner = this.guessedWord().join('') === answer;
    console.log(this.state.answer);
    gameStat = this.generateButtons();
    if (isWinner) {
      score++;
      // Set the score
      console.log(score);
      gameStat = 'YOU WON';
    }
  if (gameOver) {
    gameStat = 'YOU LOST';
  }
  if (gameStat === 'YOU WON') {
    Button = (
      <div>
        <p className="text-center text-warning mt-6">
          SCORE: {score}
        </p>
        <p className="text-center">
          <button
            className="Hangman-reset"
            onClick={this.nextButton}
          >
            Next
          </button>
        </p>
      </div>
    );
    }
    if (gameStat === 'YOU LOST') {
      Button = (
        <div>
          <p className="text-center text-warning mt-6">GAMEOVER!</p>
          <p className="text-center text-warning mt-6">
            SCORE: {score}
          </p>
          <p className="text-center">
            <button
              className="Hangman-reset"
              onClick={this.resetButton}
            >
              Restart
            </button>
          </p>
        </div>
      );
  }
    return (
			<div className="Hangman">
					<div className="row">
						<div className="col-sm-5">
							<a className="text-light" href="/">
								Hangman
							</a>
						</div>
						<div className="col-sm-4 text-primary">
							Score : {score}
						</div>
						<div className="col-sm-3 text-primary">
							Guessed wrong: {mistake}
						</div>
				</div>
				<p className="text-center">
					<img src={images[mistake]} alt={altText} />
				</p>
				<p className="text-center text-light">
					Guess the Programming Language ?
				</p>
				<p className="Hangman-word text-center">
					{!gameOver ? this.guessedWord() : answer}{' '}
				</p>
				<p className="text-center text-warning mt-4">{gameStat}</p>
				{Button}
			</div>
		);
	}
}

export default Hangman;
