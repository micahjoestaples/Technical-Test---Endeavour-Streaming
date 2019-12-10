/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com')
  })

  it('.type() - type into a DOM element', () => {
    cy.get('.gLFyf').type('endeavor streaming')
    cy.get(':nth-child(1) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span').click()
    cy.get('[href="https://www.endeavorstreaming.com/"] > .LC20lb > .S3Uucc').click()
    cy.get('.Header-nav-inner > [href="/about"]')
        .click()
    cy.contains('INNOVATE')
    cy.url()
        .should('include','endeavorstreaming')




  })


  })
