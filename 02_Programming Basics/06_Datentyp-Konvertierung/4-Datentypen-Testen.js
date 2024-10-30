//////////////////////////////////////
// Datentypen testen
//////////////////////////////////////

let value = "";


// Ist die Variable ein String?
if (typeof value === 'string') {
  console.log('Die Variable ist ein String.');
}


// Ist die Variable ein Boolean?
if (typeof value === 'boolean') {
  console.log('Die Variable ist ein Boolean.');
}


// Ist die Variable NaN?
if (Number.isNaN(value)) {
  console.log('Die Variable ist ein NaN.');
}


// Ist die Variable eine valide Number (kein NaN)?
if (typeof value === 'number' && !Number.isNaN(value)) {
  console.log('Die Variable ist ein valide Number (kein NaN).');
}


// Ist die Variable undefined?
if (value === undefined) {
  console.log('Die Variable ist ein undefined.');
}


// Ist die Variable null?
if (value === null) {
  console.log('Die Variable ist ein null.');
}
