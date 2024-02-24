const { Given, When, Then } = require ('@wdio/cucumber-framework');

const loginpage = require ('../pageobjects/login.page.js');
const homepage = require ('../pageobjects/home.page.js');


Given(/^annisa is in the login page$/,async () => {
   await loginpage.open()
})

When(/^annisa login with "(.*)" credentials$/,async (username) => {
   await loginpage.login(username)
})

Then(/^annisa should see home page$/,async () => {
   await homepage.validateHomePage()
})

Then(/^annisa should see error "(.*)" $/,async (message) => {
   await loginpage.validateLockedOutUserError(message)
})



