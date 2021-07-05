# react-test-task

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
