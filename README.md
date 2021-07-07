# react-test-task

## Features

- / login - login and password input page (main)
- / list - a page with a list of posts
- / post - a page with a full post content
- pagination on list page
- logout button
- list takes from public api [`https://jsonplaceholder.typicode.com/`](https://jsonplaceholder.typicode.com/)

## Stack

- JS
- TypeScript
- React
- React router
- Redux
- SCSS
- Webpack

## Prepare for run

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: react-test-task
3. Clone your newly created repo: https://github.com/<%your_github_username%>/react-test-task/
4. Go to folder `react-test-task`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm run start:dev` in the command line
7. You will see the opened page in your browser

## Task

Implement an application that can display pages:

- / login - login and password input page (main)
- / list - a page with a list of something

The login form (/ login) accepts “fake” data:

username: Admin
password: 12345

Display the message if the wrong credentials are filled out: "Username or password incorrect"
If the data is correct, then transfer to the page / list
Store the authorization information in localStorage using a simple parameter true / false. (Without DB)
Throw everything you need through Redux.

The design is not important.

The plus will be:

- get the list from the open API
- create a product / news page, to which the user goes from the list page. Should contain full content
- pagination
- maybe some filters on the list page
