/**
 *
 * Task 04
 * 
 * Fix the code below so that:
 * 
 * - Gina is a full-stack developer only if both the first 2 booleans are true
 * 
 */

let isBackEndDeveloper = false;
let isFrontEndDeveloper = true;

let isFullStackDeveloper = isBackEndDeveloper || isFrontEndDeveloper;

console.log(
  `Gina ${isFullStackDeveloper ? "is" : "is not"} a full-stack developer`
);
