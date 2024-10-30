# Object and functions

This exercise lets you practice working with objects and some basic use cases of using them in combination with functions.

## Task 1

Create 3 objects containing data for user profiles.

Each object should contain the following properties:

- `firstName`
- `lastName`
- `email`
- `age`

Feel free to use any data you want or just use the examples below:

- Mark Maxwell, 32, mark@email.com
- Sally Samson, 24, sally@email.com
- Jenny Jay, 38, jenny@email.com

Print each object to the console.

Expected output:

```plaintext
{
  firstName: 'Mark',
  lastName: 'Maxwell',
  age: 32,
  email: 'mark@email.com'
}
{
  firstName: 'Sally',
  lastName: 'Samson',
  age: 24,
  email: 'sally@email.com'
}
{
  firstName: 'Jenny',
  lastName: 'Jay',
  age: 38,
  email: 'jenny@email.com'
}
```

## Task 1.1

Add a property `city` to the 3 objects you created, without modifying the code you have already written.

## Task 1.2

Create a function called `describe` that takes a `user` object in input and returns a string with a message describing that user.

For example, assuming we added the city New York to the first user:

```javascript
console.log(describe(user1));

// output
"Mark Maxwell is 32 years old and lives in New York"
```

## Task 1.3

Add an extra property `job` only to the first two user objects you created. In the end, only the first 2 users should have a job.

Write a function called `showJob` that takes a `user` object in input and returns a string with a message telling what job the user does. 

For example:

```plaintext
Sally Samson works as a web developer
```

If a user doesn't have the `job` property the message should be different.

For example:

```plaintext
Jenny Jay is currently unemployed
```

## Task 2

Create 3 objects representing vehicles containing the following properties:

- `type`: the type of the vehicle, for example car, truck, van, motorcycle...
- `color`: the color of the vehicle
- `brand`: the brand of the vehicle, for example Honda, Toyota, Ford... 
- `mileage`: the kilometers that the vehicle has travelled so far

## Task 2.1

Create a function `needsRevision` that accepts a `vehicle` object in input and returns `true` or `false` depening on the `mileage` of the vehicle.

If the `mileage` is greater than 60000, the function returns `true`, otherwise it returns `false`.
