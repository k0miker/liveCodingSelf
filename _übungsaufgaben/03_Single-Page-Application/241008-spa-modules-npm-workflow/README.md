# npm dependencies & module import / export

Parts of this exercise are already complete, but what are missing are the npm dependencies and the module import / exports.

## Tasks

### Task 1

- Review the code in the following files. Do not edit them.
  - [functions.js](./functions.js)
  - [main.js](./main.js)

### Task 2

- Install [ora](https://www.npmjs.com/package/ora) as an npm dependency
- Install [chalk](https://www.npmjs.com/package/chalk) as an npm dependency
- Configure the [package.json](./package.json) file to use ESM-style modules

### Task 3

In [main.js](./main.js);

- Import `ora`
- Import `chalk`

### Task 4

- In [functions.js](./functions.js);
  - add the missing `export` keyword to export the function `getNextColor` as a default export
- In [main.js](./main.js);
  - import the default export from [functions.js](./functions.js)
- Don't change any other code

### Task 4

Try running the application. It should now run without errors.
