# Random Numbers

This exercise will help you practice the use of updater functions when setting state with the `useState` hook.

## Tasks

### Task 1

Working in the [src/components/RandomList.jsx](./src/components/RandomList.jsx) file;

- Create a `RandomList` component. Its purpose is to store (in state) and render a list of random numbers in state.
- Use the `useState` hook to store an array of `numbers`
- The initial state should be an empty array (`[]`)
- The `RandomList` component should also render a `<button>` element

### Task 2

Continuing in the [src/components/RandomList.jsx](./src/components/RandomList.jsx) file;

- Add logic so that when the `<button>` element is clicked, a random number is **included** in the array (in state)
- The original numbers should remain

> 🐅 Use an [updater function](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state) for your state setter! This means you have to pass a function into your setter, instead of a value

> 🐻 An **updater function** takes the current state, and calculates the next state from it

### Task 3

Continuing in the [src/components/RandomList.jsx](./src/components/RandomList.jsx) file;

- Render the array `numbers` from your state
- Use the `<ul>` and `<li>` elements for the `numbers`

### Task 4

Working in the [src/App.jsx](./src/App.jsx) file;

- Import the `RandomList` component and render it

> Make sure you're also exporting the `RandomList` component!
