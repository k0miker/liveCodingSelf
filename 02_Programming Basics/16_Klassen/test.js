// const numbers = [ 1, 2, 3, 4 ];

// const sum = numbers.reduce((accumulator, number) => {
// 	return accumulator + number;
// }, 100);
// console.log(sum); // 10


// const strings = ["apple", "baseball", "dragon-fruit", "library"];

// const firstLetters = strings.reduce((accumulator, string) => {
// 	return accumulator + string[0];
// }, "");
// console.log(firstLetters);


const products = [
	{ name: 'Butter', price: 1.20 },
	{ name: 'Tomaten', price: 2.40 },
	{ name: 'Paprika', price: 0.80 }
];

const totalPrice = products.reduce((accumulator, product) => {
	return accumulator + product.price;
}, 0);

// Auf zwei Nachkommastellen gerundet
console.log(parseFloat(totalPrice.toFixed(2)));

const roundedNumber = Math.round(totalPrice * 100)/100; // 0.02 -> 2