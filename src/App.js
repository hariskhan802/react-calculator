import logo from './logo.svg';
import './App.css';
import Screen from './Components/Screen/Screen';
import Body from './Components/Body/Body';
import { useState } from 'react';
function App() {
	let [values, setValues] = useState('')
	let [result, setResult] = useState('')
	let operators = ['/', '*', '-', '+'];
	const getButtonData = (data) => {
		if(data == '=') {
			setResult(eval(values));
		}
		else {
			if(operators.indexOf(data) != -1) {
				let lastValue = values[values.length-1];
				if(operators.indexOf(lastValue) != -1) {
					console.log(lastValue);
					values = values.substring(0, values.length-1);
				}
				setValues(values+data);
			}
			else{

				setValues(values+data);
			}
		}
	}
	return (
		<div className="cal-app">
			<Screen equation={values} result={result} />
			<Body onButtonClick={getButtonData} />
		</div>
	);
}

export default App;
