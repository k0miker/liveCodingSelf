# Working with localStorage

localStorage allows developers to store and retrieve data in the browser. The data stored in local storage will not expire. This means the data will persist even if the tab or the browser window is closed.

## Tasks

To demonstrate the power of using the [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), we will gather data from a form and save it into our localStorage

For this exercise, you only need to edit the [main.js](./main.js) file.

### Task 1

Read the given HTML in [index.html](./index.html)

### Task 2 - Capturing the form data

Based on the HTML you examined above, create a JavaScript function `addDeveloperToTable` in [main.js](./main.js) which;

1. Is triggered by the `click` event of the `<button>` with the id `send-form`
2. Captures the form data from the `<form>` with the id `form`
3. Places the values of the form into an object called `newDeveloper`

> The object `newDeveloper` should have 3 keys, `firstName`, `lastName`, and `programmingLanguage`

### Task 3 - Checking the localStorage

We will assume the localStorage already contains data. We want to _add_ to the existing data (even if it doesn't exist yet), **instead of replacing it**.

We can achieve this by storing our data in an array.

Update the `addDeveloperToTable` function you created in Task 2 to;

1. Check the contents of the localStorage for the key `developers`
2. Write a condition;
   - If the key `developers` returns `null`, set the `developers` key on the `localStorage` to an array with the `newDeveloper` object as the only item in the array
   - If the key `developers` returns an array, add the `newDeveloper` object to the array and set the array to the `developers` key on the `localStorage`

### Task 4 - Test your code

Test that the `localStorage` is correctly being written to, using either;

- `console.log()`
- The browser's developer tools

> **Ouch! Did something fail?** 🐷
>
> A common mistake which developers make is forgetting to use `JSON.parse()` and `JSON.stringify()`.
>
> Why do you think it's important to use these functions when working with `localStorage`?

### Task 5 - Clearing the fields

Update the function `addDeveloperToTable` so that it also resets the form;

- It should clear the `<input />` fields
- It should set the `<select>` field to its default selected value

### Task 6 - Removing the developers item from localStorage

Create a JavaScript function `clearLocalStorage` in [main.js](./main.js) which;

1. Is triggered by the `click` event of the `<button>` with the id `reset-form`
2. Removes the `developers` item from the localStorage

### Task 7 - Display the developers

Create the function `displayDevelopers`, which when executed;

1. Retrieves the `developers` item from the `localStorage`
2. Updates the HTML `<table>` with the id `developer-list`, with the array of `developers`

### Task 8

- Execute the function `displayDevelopers` on page `load`
- Execute the function `displayDevelopers` after the function `addDeveloperToTable` has updated the `localStorage`

## Expected Result

![Expected Result](./reference.gif)

## Bonus Tasks

### No empty fields

Create a condition that only allows the form data to save to `localStorage`, **if** all the values in the `<input />` fields have been filled in.
