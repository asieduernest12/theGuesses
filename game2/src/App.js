import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
	const [secretNumber, setSecretNumber] = useState(null);
	const [status, setStatus] = useState('');
	const [lastGuess, setLastGuess] = useState(null);
	// const [prompt, setPrompt] = useState(null);
	const [lower, setLower] = useState(null);
	const [upper, setUpper] = useState(null);
	const lastGuessInputRef = useRef(null);

	function randInt(lower, upper) {
		var range = upper - lower;
		return Math.trunc(Math.random() * range + lower);
	}

	const reset = () => {
		// lower = $('input[name="lower"]').val();
		// upper = $('input[name="upper"]').val();

		setSecretNumber(randInt(lower, upper)); // const number = randInt(lower, upper);
		setLastGuess('none'); // lastGuess = 'none';

		// setPrompt()//prompt = 'Guess the number between ' + lower + ' and ' + upper;
		setStatus(''); //status = '';
		// render();
	};

	const checkGuess = () => {
		console.log(lastGuessInputRef.current);

    const tempLastGuess = lastGuessInputRef.current.value
    setLastGuess(tempLastGuess);
		// const lastGuess = guess; //$('input[name="guess"]').val();
		if (tempLastGuess > secretNumber) {
      // status = 'Nope. Lower';
			setStatus('Nope. Lower');
		} else if (tempLastGuess < secretNumber) {
      // status = 'Nope. Higher';
			setStatus('Nope. Higher');
		} else {
      // status = 'You got it!';
			setStatus('You got it!');
		}
		// render();
	};


	const showPromptMessage = () => {
		if (Number.isNaN(lower) || Number.isNaN(upper)) {
			return 'Enter values for lower and upper';
		}

		return `Guess the number between ${lower}  and ${upper}`;
	};

	// reset the app when it starts for the first timee
	useEffect(() => {
		console.log('%capp started', 'background-color:orange;text-white');
		reset();
	}, []);

	return (
		<div className='app_container || flex flex-col gap-2 justify-center align-center || w-full bg-blue-300 h-full lg:px-[10rem] h-[100vh] text-2xl'>
			<div>
				<h3>Play!</h3>
				<div className='prompt'>{showPromptMessage()}</div>
				<div className='last-guess'>{lastGuess}</div>
				<div className='status'>{status}</div>
				<label for='guess'>Guess: </label>
				<input type='text' className=' || || p-2' name='guess' ref={lastGuessInputRef}></input>
				<button className='|| || border-1 shadow-md bg-blue-900 text-white p-2' name='attempt' onClick={() => checkGuess()}>
					check guess
				</button>
			</div>

			<h3>Game Config</h3>

			<div className='secret-numberGuess || || text-yellow-900 hidden '>our secret number{secretNumber}</div>
			<div className='lower-upper || flex flex-col gap-2 || '>
				<div>
					<label for='lower'>Lower bound: </label>
					<input type='text' name='lower' value={lower} onChange={(event) => setLower(event.target.value)}></input>
				</div>
				<div>
					<label for='upper'>Upper bound: </label>
					<input type='text' name='upper' value={upper} onChange={(event) => setUpper(event.target.value)}></input>
				</div>
				<button name='reset' className='border-1 bg-blue-700 p-3 shadow-lg rounded-md click:bg-blue-200' onClick={() => reset()}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
