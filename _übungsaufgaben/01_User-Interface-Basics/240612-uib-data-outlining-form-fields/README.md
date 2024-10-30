# Outlining form fields
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Let's extend our knowledge with forms, by using some more advanced techniques!

## Task

Working in the files [index.html](./index.html) and [style.css](./style.css), create a form which meets the following requirements. Your finished result should look like the reference image below.

## Requirements

- Use `<input>` or `<textarea>` fields to collect the following information;
  - First name
  - Last name
  - Email
  - Tell us about yourself
- Use a `<label>` tags for each form element
- The form should also have a checkbox which is styled as a toggle switch
- Use CSS attribute selectors to target and style;
  - `text` type input fields should have a `hotpink` outline on focus
  - The input field with the type `email` and the `<textarea>` should have a `blue` outline on focus
- At the end of the form, there should be an input for submit. This input field should be `disabled`.

## Reference Image

![Reference](reference.gif)

## Bonus Task

- Remove the `disabled` attribute from the submit button
- Add form validation
- Connect the form to [formspree.io](https://formspree.io/) so you can collect user input

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### HTML structure

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Index file should contain appropriate meta tags |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Index file Should contain a title tag that is not empty |

### Form Input fields

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Inputs should have corresponding label tags |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | 'First Name' and 'Last Name' input fields should exist and be of type='text' |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | 'Email' Input field should exist |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Page should contain a 'Textarea' field |

### Form Styling

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Input fields with type='text' attribute Should have a hotpink color outline styling focus |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | 'Email' & 'textarea' Input fields should have blue color outline styling on focus |

### Submit

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Input with the type='submit' Should exist and be disabled |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=uib-data-outlining-form-fields)


[//]: # (autograding info end)