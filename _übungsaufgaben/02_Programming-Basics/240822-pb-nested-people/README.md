# Nested people

## Task 1

Given the object below:

```javascript
let person = {
    name: "Petra Morin",
    address: {
        delivery: {
            street: "371-7636 Nulla Road",
            zip: "83-315",
            country: "Germany",
        },
        billing: {
            street: "123-999 Fake Street",
            zip: "12345",
            country: "Germany",
        }
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
        {
            name: "German",
            level: 5 
        },
        {
            name: "English",
            level: 4 
        },
        {
            name: "Spanish",
            level: 2 
        },
    ]
};
```

### Task 1.1

Print the zip code of the billing address to the console

Expected output:

```plaintext
12345
```

### Task 1.2

Print the last of the hobbies

Expected output:
```plaintext
comics
```

### Task 1.3

Print the name and the level of the second spoken language 

Expected output:

```plaintext
English: 4
```

### Task 1.4

Print all the information relative to the delivery address.

Expected output:

```plaintext
Street: 371-7636 Nulla Road
Zip: 83-315
Country: Germany
```

### Task 1.5

Using a loop, print all the hobbies, each on a separate line

Expected output:
```plaintext
Hobbies: 
- drums
- skating
- comics
```

### Task 1.6

Using a loop, list all known languages with a level smaller than 5, together with their level.

Expected output:

```plaintext
English: 4
Spanish: 2
```

## Task 2

Given the array with a list of people below:

```javascript
const users = [
  {
    name: "Petra Morin",
    address: {
        delivery: {
            street: "371-7636 Nulla Road",
            zip: "83-315",
            country: "Germany",
        },
        billing: {
            street: "123-999 Fake Street",
            zip: "12345",
            country: "Germany",
        }
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
        {
            name: "German",
            level: 5 
        },
        {
            name: "English",
            level: 4 
        },
        {
            name: "Spanish",
            level: 2 
        },
    ]
  },
  {
    name: "Abel Ashley",
    address: {
        delivery: {
            street: "9977 Aliquam Avenue",
            zip: "920134",
            country: "Mexico",
        },
        billing: {
            street: "123 Lorem Square",
            zip: "912098",
            country: "Mexico",
        }
    } ,
    hobbies: ["reading books", "wood working"],
    languages: [
        {
            name: "Spanish",
            level: 5 
        },
        {
            name: "English",
            level: 5 
        },
        {
            name: "Italian",
            level: 3 
        },
    ]
  },
  {
    name: "Aaron Cardenas",
    address: {
        delivery: {
            street: "987 Ipsum",
            zip: "129-234",
            country: "France",
        },
        billing: {
            street: "123 Etwas Plaza",
            zip: "912098",
            country: "Spain",
        }
    },
    hobbies: ["painting", "singing", "hiking"],
    languages: [
        {
            name: "French",
            level: 5 
        },
        {
            name: "Spanish",
            level: 5 
        },
        {
            name: "German",
            level: 1 
        },
    ]
  },
  {
    name: "Felix Moreno",
    address: {
        delivery: {
            street: "320-7871 Nec, Av.",
            zip: "59156",
            country: "New Zealand",
        },
        billing: {
            street: "921 Nullae Aliquam",
            zip: "912098",
            country: "New Zealand",
        }
    }, 
    hobbies: ["jogging", "coffee", "bird watching"],
    languages: [
        {
            name: "English",
            level: 5 
        },
        {
            name: "Italian",
            level: 3 
        },
    ]
  },
  {
    name: "Skyler May",
    address: {
        delivery: {
            street: "Ap #854-6462 Consectetuer Ave",
            zip: "00608",
            country: "Singapore",
        },
        billing: {
            street: "Ap #854-6462 Consectetuer Ave",
            zip: "00608",
            country: "Singapore",
        }
    },
    hobbies: ["cycling", "soccer", "bouldering"],
    languages: [
        {
            name: "Malay",
            level: 5 
        },
        {
            name: "English",
            level: 5 
        },
        {
            name: "Mandarin",
            level: 4 
        },
        {
            name: "French",
            level: 2 
        },
    ]
  },
];
```

### Task 2.1

Print the name and hobbies separated by commas from the last person on the list

Expected output:

```plaintext
Skyler May
Hobbies: cycling, soccer, bouldering
```

### Task 2.2

Print the name and information about the billing address of the second person on the list

Expected output:
```plaintext
Abel Ashley

Billing address:

Street: 123 Lorem Square
Zip: 912098
Country: Mexico
```

### Task 2.3

Using loops, print all the names of the people on the list. 

For each name, print also an index that starts at 1.

Expected output:

```plaintext
1. Petra Morin
2. Abel Ashley
3. Aaron Cardenas
4. Felix Moreno
5. Skyler May
```

### Task 2.4

Using loops, print a message for each person with a message showing the name, the delivery country and the first hobby in the list.

Expected output:
```plaintext
Petra Morin lives in Germany and their favourite hobby is: drums.

Abel Ashley lives in Mexico and their favourite hobby is: reading books.

Aaron Cardenas lives in France and their favourite hobby is: painting.

Felix Moreno lives in New Zealand and their favourite hobby is: jogging.

Skyler May lives in Singapore and their favourite hobby is: cycling.
```

### Task 2.5

Using loops, print each name and every language they know with a level greater than or equal to 4.

Expected output:
```plaintext
Petra Morin speaks fluently:
- German
- English

Abel Ashley speaks fluently:
- Spanish
- English

...
```