Feature: Checkout Form Page

  Background:
    Given I access the checkout form Page

  @PP-35
  Scenario: Verify empty mandatory fields handling on Checkout Form submission
    When  Click on the Place Order button
    Then The system displays error messages corresponding to each required field in the checkout form

