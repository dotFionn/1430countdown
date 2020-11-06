// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import moment from 'moment';

const calculateTime = () => {
	let formatStringFullDate = 'DD.MM.YYYY HH:mm:ss';
	let formatStringHours = 'HH:mm:ss';
	let momentNow = moment();
	let momentEnd = moment().set('hour', 14).set('minute', 30).set('second', 0);

	let diff = momentEnd.diff(momentNow);

	let momentDiff = moment(diff).utcOffset(0).subtract({ days: 1 });

	let mNow = momentNow.format(formatStringFullDate);
	let mEnd = momentEnd.format(formatStringFullDate);
	let mDiff = momentDiff.format(formatStringHours);

	return { diff: mDiff, end: mEnd, now: mNow };
};

function App() {
	const [remainingTime, setRemainingTime] = useState('--:--:--');
	const [now, setNow] = useState('--.--.---- --:--:--');
	const [end, setEnd] = useState('--.--.---- --:--:--');

	calculateTime();

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
