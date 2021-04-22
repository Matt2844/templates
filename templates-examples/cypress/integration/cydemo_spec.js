// cydemo_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('testing out cypress', () => {
  it('logs in an existing user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name=email]').type('example@gmail.com')
    cy.get('[name=password').type('123456')
    cy.get('.sign-in-btn').click()
    cy.contains('Home, login successful!!!!!!').should('be.visible')
  })
})
