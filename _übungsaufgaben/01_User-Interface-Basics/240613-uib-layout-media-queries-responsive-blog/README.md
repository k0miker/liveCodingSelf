# Responsive Blog
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Lets create a responsive blog for coffee lovers! The following tasks will direct you towards building a blog page which has different views for both mobile and desktop.

## Tasks

Review the [style.css](/style.css) file. Use the provided [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for colors and padding / margin while writing your CSS.

For these tasks you will have to update both the [index.html](/index.html) and [style.css](/style.css) files.

### Task 1

- Review the [mobile](./content/mobile-reference.png) reference image
- Build a page that matches it as closely as possible. You can find the [coffee image](/images/coffee-banner.jpg) in the [images](/images/) folder.

> Hint: Use `<section>` elements to separate
> Note: It is generally good practice to follow a 'mobile-first' design mindset

### Task 2

- Review the [desktop](./content/desktop-reference.png) reference image.
- Using **media queries**, set the breakpoint for the desktop view at `768px`, and create a new set of styles that recreates the layout in the reference image as closely as possible

### Task 3

The `<aside>` element should only appear only when the breakpoint is higher than `768px`

- Hide the `<aside>` element when the breakpoint is less than `768px` (mobile view)

---

Images used under the [Unsplash license](https://unsplash.com/license)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Navigation links

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Page should contain a `Home`,`About` and `Contact` navigation items |

### Styling

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Page should be styled with provided color `variables` |

### Responsiveness

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `Aside` menu should be hidden on screens smaller than `768px` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=uib-layout-media-queries-responsive-blog)


[//]: # (autograding info end)