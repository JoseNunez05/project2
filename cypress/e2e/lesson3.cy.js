describe('template spec', () => {
  it('passes', () => {
    cy.visit('//www.saucedemo.com/')

    // Test Case 1: Valid login with standard_user's credentials.
    // cy.get('input#user-name.input_error.form_input').type('standard_user')
    // cy.get('input#password.input_error.form_input').type('secret_sauce')
    // cy.get('input#login-button.submit-button.btn_action').click()

    // Test Case 2: Adding items to cart
    // cy.get('button#add-to-cart-sauce-labs-backpack.btn_primary.btn_small.btn_inventory').click()

    // Test Case 3: Removing items from the cart
    // cy.get('button#add-to-cart-sauce-labs-backpack.btn_primary.btn_small.btn_inventory').click()
    // cy.get('button#add-to-cart-sauce-labs-backpack.btn_primary.btn_small.btn_inventory').click()

    // Test case 4: Testing the checkout process
    // cy.get('button#add-to-cart-sauce-labs-backpack.btn_primary.btn_small.btn_inventory').click()
    // cy.get('a.shopping_cart_link').click()
    // cy.get('button#checkout.btn.btn_action.btn_medium.checkout_button').click()
    // cy.get('input#first-name.input_error.form_input').type('John')
    // cy.get('input#last-name.input_error.form_input').type('Doe')
    // cy.get('input#postal-code.input_error.form_input').type('12345')
    // cy.get('input#continue.submit-button.btn.btn_primary.cart_button.btn_action').click()
    // cy.get('button#finish.btn.btn_action.btn_medium.cart_button).click()

    // Test case 5: Removing an item from the cart manually.
    // cy.get('button#add-to-cart-sauce-labs-backpack.btn_primary.btn_small.btn_inventory').click()
    // cy.get('a.shopping_cart_link').click()
    // cy.get('button#remove-sauce-labs-backpack.btn.btn_secondary.btn_small.cart_button').click()


  })
})