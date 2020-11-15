# Trivia Game Coding Challenge

## Overview

Your challenge is to create a 10 question, true or false, trivia app in the technology you are applying to work in. **You should not just implement the most basic solution. This is a chance to show off your abilities and impress.**

**The application code will be reviewed and scored on these key areas with many subset areas for each:**

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

Some specific things that we are looking for:

- Typescript if you know it
- Use of Expo for React Native projects
- Correct implementation of a state manager
- Correct implementation of a navigation solution
- Componentization
- Communication in the repo and/or code
- Best practices with API calls and data
- Separation of concerns between business and UI logic

## Goals

Implement the screens based off the wireframes and api below using **advanced techniques** and **industry best practices** for your platform. Note that the wireframes may not be complete, so use your best judgment for UI/UX implementation. **Do not use a boilerplate like React Boilerplate or Ignite for this challenge.** We want to see how you structure your project and what tooling you use from scratch. Create react app is fine to use. React Native projects should use the Expo CLI workflow: https://facebook.github.io/react-native/docs/getting-started

## Specifications

Data:

The api url is: https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean

Sample returned json:

```javascript
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
```

### Intro / Home Screen:

![The Intro screen for the app](https://raw.githubusercontent.com/g2i/code-challenge-static-assets/master/Intro.png "The intro screen for the app")

- Static Text
- BEGIN button navigates to the Quiz screen and starts the Quiz

### Quiz Screen:

![The Quiz screen for the app](https://raw.githubusercontent.com/g2i/code-challenge-static-assets/master/Quiz.png "The quiz screen for the app")

- The headline is from question category
- The card element contains the current question
- The next question should appear after the current question is answered True or False
- After all questions have been answered, navigate to the Results Screen

### Results screen:

![The Results screen for the app](https://raw.githubusercontent.com/g2i/code-challenge-static-assets/master/Score.png "The score screen for the app")

- The Score shows correct and total
- Displays a list of the questions and whether the answer was correct or not
- PLAY AGAIN starts over and navigates to the Home Screen

---
