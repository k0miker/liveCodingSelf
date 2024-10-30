import Bank from './Bank';
import CardNumber from './CardNumber';
import CardSecurity from './CardSecurity';
import CardExpiration from './CardExpiration';
import CardHolder from './CardHolder';

import '../CSS/CreditCard.css';

// Component with multiple child components to display data
export default function CreditCard(cardInfo) {
	return (
		<div className="creditCard">
			<Bank name={cardInfo.bank} />
			<CardNumber number={cardInfo.number} />
			<CardSecurity security={cardInfo.security} />
			<CardExpiration expirationDate={cardInfo.expirationDate} />
			<CardHolder person={cardInfo.cardHolder} />
		</div>
	);
}
