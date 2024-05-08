Feature: Checkout Form Page

  Background:
    Given I access the checkout form Page

  @C35
  Scenario: Verify empty mandatory fields handling on Checkout Form submission
    When  Click on the Place Order button
    Then The system displays error messages corresponding to each required field in the checkout form

  @C80
  Scenario: Verify no input provided on Checkout Form after selecting "Use Different Billing Address"
    When Select the option "Use Different Billing Address" in the checkbox
    And Click on Place order button
    Then The error messages of billing address are displayed due to these fields are required

  @C98
  Scenario: Verify successful Placement of Order with Valid Information on Checkout Form
    When Fill in all required and valid information in the checkout form.
    And Click on the Place Order button.
    Then A confirmation message Thank you is displayed

  @C36
  Scenario: Verify a valid email address on Checkout Form
    When Enter the valid email address into the email field
    Then The system accepts the input without displaying error message Invalid email

  @C43
  Scenario Outline: Verify missing "@" symbol between local part and domain name email on Checkout Form
    When Enter the '<email>' address missing @ symbol into the email field.
    Then An error message Invalid email is displayed indicating that the email address is invalid
    Examples:
      | email         |
      | thu&gmail.com |
      | thugmail.com  |

  @C100
  Scenario Outline: Verify Input Phone Number with Special Characters or Letters on Checkout Form
    When Enter a '<phonenumber>' containing special characters into the phone number field.
    Then An error message Invalid Phone Number is displayed
    Examples:
      | phonenumber    |
      | 0466eewer15516 |
      | 554!@$%*%#     |

  @C49
  Scenario: Verify Input of Combination of Alphanumeric Characters in Address Field on Checkout Form
    When Enter an address combination of alphanumeric characters into the field
    Then There are no error messages Invalid Phone Number is displayed.

  @C52
  Scenario: Verify Input of Whitespace Characters in City Field on Checkout Form
    When Enter city name wwith whitespace characters into the city field.
    Then An error message Invalid City is displayed

  @C55
  Scenario Outline: Verify Input of Special Characters and Numeric Characters in State/Province Field on Checkout Form
    When Enter '<statename>' special characters and numeric characters into the field.
    Then An error message Invalid State Province is displayed.
    Examples:
      | statename |
      | !@#$%     |
      | 123       |
      | 123%$^    |

  @C109
  Scenario Outline: Verify Input Zip/Postal Code Below Character Limit in Shipping on Checkout Form
    When Enter a <code> with a length below the required limit into the Zip Postal Code field
    Then An error message Invalid Zip Postal Code is displayed
    Examples:
      | code |
      | 123  |
      | 12   |
      | 2    |

  @C61
  Scenario: Verify Default Selection of Country on Checkout Form
    When Check if any country is pre-selected.
    Then The system should display the default country as United States.

  @C64
  Scenario Outline: Verify Input of Special Characters and Numbers in Cardholder Name Field on Checkout Form
    When Enter '<cardholdername>' special characters or numbers into the Cardholder Name field.
    Then An error message Invalid Cardholder Name is displayed
    Examples:
      | cardholdername |
      | !@#%&^         |
      | 1242           |
      | 1341!@$%$      |

  @C71
  Scenario Outline: Verify Input of Card Number with Spaces within Length Limit on Checkout Form
    When Enter a '<cardnumber>' within the allowed limit digits but containing spaces into the Card Number field.
    Then The error message Invalid Card Number displayed
    Examples:
      | cardnumber      |
      | 1234 5678 93211 |

  @C73
  Scenario Outline: Verify Input of Special Characters or Letters in CVV Field on Checkout Form
    When Enter '<cvv>' with special characters or letters into the CVV field.
    Then The error message Invalid CVV is displayed
    Examples:
      | cvv    |
      | @!^%   |
      | onetwo |
  @C78
  Scenario: Verify Selection of Expired Expiry Date on Checkout Form
    When Select an expiry date that has already passed from the dropdown.
    Then An error message Invalid Expiry is displayed
  @C117
  Scenario: Verify Finish button functionality after successful order placement on Checkout Form
    When User click finish button on page
    Then The user has been redirected back to the website home page