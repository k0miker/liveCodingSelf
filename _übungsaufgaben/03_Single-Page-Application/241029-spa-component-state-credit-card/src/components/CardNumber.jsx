import '../CSS/CardNumber.css';

export default function CardNumber({ number }) {

	let splitNumber = [];
	if (!number.includes(' ')) {
		splitNumber = number.match(/.{1,4}/g);
		// if the number does contain spaces
	} else {
		splitNumber = number.split(' ');
	}

	return (
		<ol className="cardNumber">
			<li className="numberSetOne">{splitNumber[0]}</li>
			<li className="numberSetTwo">{splitNumber[1]}</li>
			<li className="numberSetThree">{splitNumber[2]}</li>
			<li className="numberSetFour">{splitNumber[3]}</li>
		</ol>
	);
}
