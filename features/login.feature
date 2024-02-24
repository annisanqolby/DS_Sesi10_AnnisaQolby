Feature: Swag Labs - Login
  Background: User on the login page
   Given annisa is in the login page

  Scenario: As a standard_user, i want to login successfully
     When annisa login with "standard_user" credentials
     Then annisa should see home page

  Scenario: As a locked_out_user, i should get error message
     When annisa login with "locked_out_user" credentials
     Then annisa should see error "Epic sadface: Sorry, this user has been locked out."

