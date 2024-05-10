Feature: Men's Outerwear Page

  Background:
    Given I open Men's Outerwear Page

  @C13
  Scenario: Verify the product list page of Men's Outerwear Category
    When User verifies the information for each product
    Then The total number of products on the page is displayed and All products displayed on the page include image, product names and prices

  @C17
  Scenario: Verify the product detail page in the Men's Outerwear category
    When User clicks on the product to view its details
    Then The total number of products on the page is displayed and The product detail page should include product name, description, price, size, quantity, and buttons to add the product to the cart

  @C21
  Scenario: Verify adding products to the cart in Men's Outerwear category
    When User selects the quantity of the product to purchase.
    And User selects the size of product
    And User clicks on the Add to Cart button.
    Then Confirmation dialog box displayed to notify that the product has been "Added to cart", with 2 options "view cart" and "checkout" for the user to perform the next action of shopping

  @C25
  Scenario: Verify proceed to checkout after adding products from the Men's Outerwear category page and view the products in the cart
    When The user clicks on the View Cart button in the notification popup
    And Click the Checkout button to proceed with the checkout process
    Then Users will be redirected to the payment page with an order information form to complete the purchasing process.

  @C26
  Scenario: Verify proceed to direct checkout after adding a product from the Men's Outerwear category
    When The user clicks on the Checkout button in the notification popup
    Then The product just added to cart is displayed on the order summary section of the checkout form


  @C116
  Scenario: Verify the closing of the dialog box on the product detail view page of the Men's Outerwear category after successfully adding the product to the cart
    When User click X button on the top-right corner of the box
    Then The dialog box is closed
