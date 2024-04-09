Feature: Men's Outerwear Page

  Background:
    Given I open Men's Outerwear Page

  @PP-13
  Scenario: Verify the product list page of Men's Outerwear Category
    When User verifies the information for each product
    Then The total number of products on the page is displayed
    And All products displayed on the page include image, product names and prices

  @PP-17
  Scenario: Verify the product detail page in the Men's Outerwear category
    When User clicks on the product to view its details
    Then The total number of products on the page is displayed
    And The product detail page should include product name, description, price, size, quantity, and buttons to add the product to the cart

  @PP-21
   Scenario: Verify adding products to the cart in Men's Outerwear category
    When User selects the quantity of the product to purchase.
    And User selects the size of product
    And User clicks on the "Add to Cart" button.
    Then Confirmation dialog box displayed to notify that the product has been "Added to cart", with 2 options "view cart" and "checkout" for the user to perform the next action of shopping
    

