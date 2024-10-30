# Practicing simple media queries
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Media queries allow us to target our styles to specific screen dimensions, meaning we can tailor the visual experience depending on the viewing capabilities of a device.

## Tasks

Using the css properties `min-width` or `max-width`, change the effective CSS for the breakpoints in the following tasks.

- Work in the [main.css](/main.css) file
- The [HTML](/index.html) has already been prepared; you do not need to change it

### Task 1

Create CSS breakpoints so that the `border` of the `<main>` element has the corresponding effect, for the following screen widths;

- 0 - 375px: **red** border
- 376px - 425px: **blue** border
- 426px - 768px: **green** border
- 769px - 1024px: **yellow** border
- 1025px - 1440px: **hotpink** border
- 1440px -> (upwards): **azure** border

### Task 2

Create CSS breakpoints so that the `background` of the `<body>` element has the corresponding effect, for the following screen widths;

- 0 - 500px: lightpink
- 501px - 1000px: lightblue
- 1000px -> (upwards): lightgreen

### Task 3

Create CSS breakpoints so that the `<h3>` element has the corresponding effect, for the following screen widths;

- 0 - 360px: not displayed on page
- 361px -> (upwards): displayed on page

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 0-375px breakpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `body` should have **red** border |

### 376-425px breakpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `body` should have **blue** border |

### 426-768px breakpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `body` should have **green** border |

### 769-1024px breakpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `body` should have **yellow** border |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `body` should have **hotpink** border |

### 1441px and uo breakpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `body` should have **azure** border |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=uib-layout-simple-media-queries)


[//]: # (autograding info end)