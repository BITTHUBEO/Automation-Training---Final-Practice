Feature: Checkout Form Page

  Background:
    Given I access the checkout form Page

  @PP-35
  Scenario: Verify empty mandatory fields handling on Checkout Form submission
    When  Click on the Place Order button
    Then The system displays error messages corresponding to each required field in the checkout form

  @PP-80
  Scenario: No Input Provided after Selecting "Use Different Billing Address"
    When Select the option "Use Different Billing Address" in the checkbox
    And Click on Place order button
    Then The error messages of billing address are displayed due to these fields are required

  @PP-98
    Scenario: Verify successful Placement of Order with Valid Information
    When Fill in all required and valid information in the checkout form.
    And Click on the Place Order button.
    Then A confirmation message Thank you is displayed

  @PP-36
    Scenario: Verify a valid email address
    When Enter the valid email address into the email field
    Then The system accepts the input without displaying error message Invalid email

  @PP-43 
    Scenario Outline: Verify missing "@" symbol between local part and domain name
    When Enter the '<email>' address missing @ symbol into the email field.
    Then An error message Invalid email is displayed indicating that the email address is invalid
    Examples:
      |     email        | 
      |  thu&gmail.com   |      
      |  thugmail.com    |  