// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const calculateTime = () => {
	let time = new Date();
	let now = `${`0${time.getDate()}`.slice(-2)}.${`0${time.getMonth() + 1}`.slice(
		-2
	)}.${time.getFullYear()} ${`0${time.getHours()}`.slice(-2)}:${`0${time.getMinutes()}`.slice(
		-2
	)}:${`0${time.getSeconds()}`.slice(-2)}`;

	let endReturn = `${`0${time.getDate()}`.slice(-2)}.${`0${time.getMonth() + 1}`.slice(
		-2
	)}.${time.getFullYear()} 14:30:00`;

	let endDateString = `${time.getFullYear()}-${`0${time.getMonth() + 1}`.slice(
		-2
	)}-${`0${time.getDate()}`.slice(-2)}T14:30:00`;

	console.log(endDateString);

	let endDate = Date.parse(endDateString);

	console.log(endDate);

	let diff = endDate.valueOf() - time.valueOf();

	let diffD = new Date(diff);

	let diffstr = `${`0${diffD.getHours()}`.slice(-2)}:${`0${diffD.getMinutes()}`.slice(
		-2
	)}:${`0${diffD.getSeconds()}`.slice(-2)}`;

	return { diff: diffstr, end: endReturn, now };
};

function App() {
	const [remainingTime, setRemainingTime] = useState('--:--:--');
	const [now, setNow] = useState('--:--:--');
	const [end, setEnd] = useState('--:--:--');

	useEffect(() => {
		let i = setInterval(() => {
			let { diff, now, end } = calculateTime();
			setRemainingTime(diff);
			setNow(now);
			setEnd(end);
		}, 200);

		return () => {
			clearInterval(i);
		};
	});

	return (
		<div className="App">
			<header className="App-header">
				{now}
				<br />
				{remainingTime}
				<br />
				{end}
			</header>
		</div>
	);
}

export default App;
