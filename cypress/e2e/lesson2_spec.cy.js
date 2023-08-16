describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    // cy.get('ul.home-list>li>a').contains('Querying').click()
    // cy.get('ul.home-list>li>a').contains('Actions').click()
    // cy.get('input#email1.form-control.action-email').type('cheese400@hotmail.com')

    cy.get('ul.home-list>li>a').contains('Misc').click()
    cy.get('input#name.form-control').type('donald trump')
    cy.get('textarea#description.form-control').type('i love watermelon')

  })
})

// thanks Brandt!