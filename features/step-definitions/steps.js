const { Given, When, Then } = require ('@wdio/cucumber-framework');

const loginpage = require ('../pageobjects/login.page.js');
const homepage = require ('../pageobjects/home.page.js');
const problemPage = require ('../pageobjects/problem.page.js');
const visualUserPage = require('../pageobjects/visualUser.page.js');


Given(/^annisa is in the login page$/,async () => {
   await loginpage.open()
})

When(/^annisa login with "(.*)" credentials$/,async (username) => {
   await loginpage.login(username)
})

Then(/^annisa should see home page$/,async () => {
   await homepage.validateHomePage()
})

Then(/^annisa should see error "(.*)"$/,async (message) => {
   await loginpage.validateLockedOutUserError(message)
})

Then(/^annisa should see problem page$/,async () => {
   await problemPage.validateProblemPage()
})

Then(/^annisa should see visual User page$/,async () => {
   await visualUserPage.validatevisualUserPage()
})



