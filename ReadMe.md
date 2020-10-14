
[![Maintainability](https://api.codeclimate.com/v1/badges/5a502ca580cc32e02669/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/artificial-artist-fe/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/5a502ca580cc32e02669/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/artificial-artist-fe/test_coverage)


#  KIDSFLY2

 You can find the deployed project at [kidsfly.netlify.app](https://www.kidsfly.netlify.app).



## Project Overview

1️⃣ [Trello Board](https://trello.com/b/QHXgGVlP/bw-pt-kidsfly)

2️⃣ [Product Canvas](https://www.notion.so/Artificial-Artist-1934140bf39c4f2ba1b8910de0ee0d41)


KidsFly is an airline vendor offering consierge services for the modern family. Alerted by your mobile app's 5minutes our button; The KidsFly crewmember will greet you at the entrance wish an itinerary predetermined snacks for you children, take control of your luggage, checkin and boarding passes, allowing you expedited entrance through security and through the onboarding procedure with your main concern being you kids. Kids Fly Connection staff takes care of the rest.

## Key Features
KidsFly offers a mobile app for end users, and Three Dashboard views accessible by authenticated and authorized users. 
#### The admin board 
 - allows control and birds eye view of all incoming patrons,
 - the KidsConnection staff members on premises for today,
 - pairings of KidsConnection staff members and patrons 
 - access to incoming HR applications for new KidsConnection team members.
#### The Staff Dashboard
 - features a queue of incoming patrons
 - your current and next assignment details viewable
#### The Patron Dashboard
 - 5 minutes out button
 - displays Home airport
 - passed and upcoming flights
 - menus for declaring luggage
 - making pre and inflight arrangements for meals snacks and any other specialty services requests
 



### Sitemap Component Route Tree 
<img width="75%" src="https://i.imgur.com/6tezMaB.png"/>

### User Flows 
<img src="https://i.imgur.com/4HhymHi.png"/> 


## Tech Stack
React | Redux | ReactRouter V4 | Netlify | Formik | Yup | Axios | JWT | Material UI | Styled-Componenets
### Front end built using:

#### 1️⃣ [Reactjs](https://reactjs.org/) ![React](https://img.shields.io/badge/react-v16.13.1-blue.svg)

-    Declarative --Declarative views make your code more predictable and easier to debug.
-    Component-Based --Build encapsulated components that manage their own state, then compose them to make complex UIs.
-    Learn Once, Write Anywhere --You can develop new features in React without rewriting existing code

#### 2️⃣ [Redux](https://redux.js.org/) ![Redux](https://img.shields.io/badge/redux-v4.0.5-blueviolet.svg)
 
-   Single immutable state tree
-   Ease of Testing
-   Global Store of App State

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/BWPT-KidsFly/Backend) built using:

#### 1️⃣ [Node Express](https://expressjs.com/) ![Express](https://img.shields.io/badge/express-v4.17.1-lightgrey.svg)

-    Great performance! Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications).
-    Code is written in "plain old JavaScript", which means that less time is spent dealing with "context shift" between languages when you're writing both client-side and server-side code.
-    The node package manager (NPM) provides access to hundreds of thousands of reusable packages. It also has best-in-class dependency resolution and can also be used to automate most of the build toolchain.

#### 2️⃣ [PostgreSQL](https://www.postgresql.org/) ![PostgreSQL](https://img.shields.io/badge/pg-v8.2.1-blue.svg)

-    Implements the SQL standard very well.
-    Completely open source.
-    It supports lots of advanced data types, such as (multi-dimensional) arrays, user-defined types, etc.


# APIs
## 1️⃣ https://docs.rapidapi.com/docs/keys
#### You'll need to register with rapidapi to get a user key.
- Its free to signup with rapidapi and they have thousands of apis you can test and access on their platform.
- Read the documentation for any apis that you register a secondary key. 
### Most are free, some are freemium.
- You might need a credit card to register in case the api is abused or accessed milions of times in a row.
 
 #### An example rate is 
- free access to the first 500 attempted calls from your verifed IP address to the" Airline Server" per day
- then $.01 per call for any calls after 30 in an hour
- Verify this before making any backend endpoint calls


## 2️⃣ https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/
The API gives users access to the site's data making it available for use in third party web sites and applications. 
This data includes: airport locations, Abbreviations, flight departure and arrival times, flight availablity etc.
The API uses HTTP calls and responses are formatted in XML, JSON and PHP.


## 3️⃣ BOM Browser Object Model & geolocation api 
  This api integrates with the skyscanner-flight-search allowing the user to find and store their home airport by latitude and longitude coordinates available through the current browser session on the user's device. 

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables; 
Either in their local path
- on the path of the container
- image spun up
- accessible through a custom 3rd party server
- or in a .env file at the root of the project

The .env file could contain the following ( no spaces | no <>'s | no "quotes" ):
REACT_APP_RAPID_API_:<the url of the skyscanner most recent endpoint>
REACT_APP_RAPIDAPI_KEY:<your registered access key with rapidapi platform>


# Testing

## 1️⃣ [Jest](https://jestjs.io/) ![Jest](https://img.shields.io/badge/jest-v4.2.4-red.svg)
-   Jest is a JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!


# Installation Instructions

* Clone this repo
* run `yarn install` to install all required dependencies
* run `yarn start` to start the local server


## Other Scripts

* start - ***"react-scripts start",*** starts the production server after a build is created
* build - ***"react-scripts build",*** creates a build of the application
* test - ***"react-scripts test",*** runs tests in **tests** directory
* eject - ***"react-scripts eject",*** copy the configuration files and dependencies into the project so you have full control over them
* coverage - ***"CI=true yarn test --coverage --watchAll=false || true"*** refers to how much of your app code is covered by unit tests

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/BWPT-KidsFly/Frontend/blob/master/README.md) for details on the backend of our project.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



##  Contributors

|[Adrian Guadalupe](https://github.com/adrian-guadalupe)  |  [Tucker Wray](https://github.com/jtwray)   |  [Raudel Flores](https://github.com/raudelf)  | 
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | 
|  [<img src="https://avatars2.githubusercontent.com/u/54679236?s=460&u=41478c1e229be136bd7c139c259d53f03673b935&v=4" width = "300" />](https://github.com/Adrian-Guadalupe)|   [<img src="https://avatars3.githubusercontent.com/u/42871401?s=460&u=35f925b378034e977975950f46de33aaff941bf4&v=4" width = "300" />](https://tuckerwray.me)                       | [<img width="300" src="https://avatars3.githubusercontent.com/u/55217618?s=460&u=b1abf94b101cd5559285571ab6552dd74ce645fc&v=4" />](https://github.com/raudelf) |                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/adrian-guadalupe)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jtwray)   [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jtwray/)  [<img src="https://twitter.com/favicon.ico" width="15"> ](https://twitter.com/tuckerwray)  [<img src="https://dev.to/favicon.ico" width="15"> ](https://dev.to/tuckerwray)   [<img src="https://tuckerwray.me/favicon.ico" width="15"> ](https://tuckerwray.me) [<img src="https://codesandbox.io/favicon.ico" width="15"> ](https://codesandbox.io/u/jtwray)  [<img src="https://codepen.io/favicon.ico" width="15"> ](https://codepen.io/jtwray) [<img src="https://stackoverflow.com/favicon.ico" width="15"> ](https://stackoverflow.com/users/10765227/tucker-wray)   |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/raudelf)            |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/adrianguadalupe/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jtwray/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/raudelf/) |

<br>
<br>

