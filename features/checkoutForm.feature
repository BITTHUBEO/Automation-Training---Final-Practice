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
      | email         |
      | thu&gmail.com |
      | thugmail.com  |

  @PP-100
  Scenario Outline: Verify Input Phone Number with Special Characters or Letters
    When Enter a '<phonenumber>' containing special characters into the phone number field.
    Then An error message Invalid Phone Number is displayed
    Examples:
      | phonenumber    |
      | 0466eewer15516 |
      | 554!@$%*%#     |

  @PP-49
  Scenario: Verify Input of Combination of Alphanumeric Characters in Address Field
    When Enter an address combination of alphanumeric characters into the field
    Then There are no error messages Invalid Phone Number is displayed.

  @PP-52
  Scenario: Verify Input of Whitespace Characters in City Field
    When Enter city name wwith whitespace characters into the city field.
    Then An error message Invalid City is displayed

  @PP-55
  Scenario Outline: Verify Input of Special Characters and Numeric Characters in State/Province Field
    When Enter '<statename>' special characters and numeric characters into the field.
    Then An error message Invalid State Province is displayed.
    Examples:
      | statename |
      | !@#$%     |
      | 123       |
      | 123%$^    |

  @PP-109
  Scenario Outline: Verify Input Zip/Postal Code Below Character Limit in Shipping
    When Enter a <code> with a length below the required limit into the Zip Postal Code field
    Then An error message Invalid Zip Postal Code is displayed
    Examples:
      | code |
      | 123  |
      | 12   |
      | 2    |

  @PP-61
  Scenario: Verify Default Selection of Country
    When Check if any country is pre-selected.
    Then The system should display the default country as United States.

  @PP-64
  Scenario Outline: Verify Input of Special Characters and Numbers in Cardholder Name Field
    When Enter '<cardholdername>' special characters or numbers into the Cardholder Name field.
    Then An error message Invalid Cardholder Name is displayed
    Examples:
      | cardholdername |
      | !@#%&^         |
      | 1242           |
      | 1341!@$%$      |

  @PP-71
  Scenario Outline: Verify Input of Card Number with Spaces within Length Limit
    When Enter a '<cardnumber>' within the allowed limit digits but containing spaces into the Card Number field.
    Then The error message Invalid Card Number displayed
    Examples:
      | cardnumber      |
      | 1234 5678 93211 |

  @PP-73
  Scenario Outline: Verify Input of Special Characters or Letters in CVV Field
    When Enter '<cvv>' with special characters or letters into the CVV field.
    Then The error message Invalid CVV is displayed
    Examples:
      | cvv    |
      | @!^%   |
      | onetwo |
  @PP-78
  Scenario: Verify Selection of Expired Expiry Date
    When Select an expiry date that has already passed from the dropdown.
    Then An error message Invalid Expiry is displayed
  @PP-117
  Scenario: Verify Finish button functionality after successful order placement
    When User click finish button on page
    Then The user has been redirected back to the website home page