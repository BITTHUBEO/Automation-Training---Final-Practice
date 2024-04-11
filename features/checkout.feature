Feature: Checkout Page

  Background:
    Given I open Men's Outerwear Page

  @PP-34
  Scenario: Verify that user can Checkout after Editing Cart Contents
    When User verifies the information for each product
    Then The total number of products on the page is displayed
    And All products displayed on the page include image, product names and prices