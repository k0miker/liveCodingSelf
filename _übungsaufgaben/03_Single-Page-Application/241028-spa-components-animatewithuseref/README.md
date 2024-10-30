# Animation library

This exercise is about practicing how to target DOM elements with useRef.

[Live demo](https://digitalcareerinstitute.github.io/SPA-Component-AnimateWithUseRef/)

## Requirements

- When the user clicks "Next" the `current` state variable must increment
    - If the value reaches 5, set `current` back to 0
- Use `useRef` to keep a reference to the rendered `.target` DOM element
- When the `current` state variable changes, call `.animate()` on the `.target` DOM element'
    - `.animate()` takes two parameters, animation keyframes and timing
    - use the provided `timing` object for timing
    - use `animations[current]` for the animation keyframes

## See also

- https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
- https://developer.mozilla.org/en-US/docs/Web/CSS/filter
