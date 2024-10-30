# Loop with input

## Task 1

Write a `for` loop that goes from 0 until `max` (not included) and prints every number to the console. 

The value for `max` should be passed to the script from the command line

**IMPORTANT**: the input coming from the command line is always a string. When you
need numbers, remember to convert it

For example:

```plaintext
node task-1.js 5
```



Expected output:

```plaintext
0
1
2
3
4
```



## Task 2


Write a `for` loop that goes from 0 until `max` (not included) with an increment defined by the variable `step` and prints every number to the console. 

The values for `max` and `step` should be passed to the script from the command line

**Important**: the input coming from the command line is always a string. when you
need numbers, remember to convert it

For example:

Count up to 10 with an increment of 2:

```plaintext
node task-2.js 10 2 
```

Expected output:

```plaintext
0
2
4
6
8
```

Count up to 50 with an increment of 5:

```plaintext
node task-2.js 50 5
```

```plaintext
0
5
10
15
20
25
30
35
40
45
```



## Task 3

Like the previous task, but if the value of `step` is greater than the value of `max`, print a message to the console warning the user that the first argument should always be greater than the second

For example:

```plaintext
node task-3.js 10 2 
```

Expected output:

```plaintext
0
2
4
6
8
```

But:
```plaintext
node task-3.js 2 5
```

Expected output:
```plaintext
Attention: the first number must be greater than the second!
```

## Task 4


Similar to previous task, but if the user doesn't pass any value in the command line, use the following default values:

- default value for `max`: 10
- default value for `step`: 1

For example:

```plaintext
node task-4.js
```

Expected output:

```plaintext
1
2
3
4
5
6
7
8
9
```