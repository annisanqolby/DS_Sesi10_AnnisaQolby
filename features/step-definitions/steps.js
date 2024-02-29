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
   if (message == 'Epic sadface: Username and password do not match any user in this service') {
      await loginpage.validatenoUserError(message)
   }  else if  (message == 'Epic sadface: Sorry, this user has been locked out.') {
      await loginpage.validateLockedOutUserError(message)
   }  else {
      throw new Error('message tidak ditemukan')
   }
})

Then(/^annisa should see error "(.*)"$/,async (message) => {
   await loginpage.validateLockedOutUserError(message)
})

Then(/^annisa should see problem page$/,async () => {
   await problemPage.validateproblemPage()
})

Then(/^annisa should see visual User page$/,async () => {
   await visualUserPage.validatevisualuserPage()
})

Then(/^annisa should see error "(.*)"$/,async (message) => {
   if (message == 'no_user') {
      await loginpage.validatenoUserError(message)
   }  else if  (message == 'locked_out_user') {
      await loginpage.validateLockedOutUserError(message)
   }  else {
      throw new Error('message tidak ditemukan')
   }
})




// Then(/^annisa should see error "(.*)"$/,async (message) => {
//    await loginpage.validatenoUserError(message)
// })


