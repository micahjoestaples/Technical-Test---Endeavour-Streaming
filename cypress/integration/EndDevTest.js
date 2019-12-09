/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.gLFyf')
      .type('nba').should('have.value', 'nba')
    cy.get(':nth-child(1) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span').click()
    //cy.get('[href="https://www.cypress.io/"] > .LC20lb > .S3Uucc').click()
    cy.get('[href="https://www.nba.com/"] > .LC20lb > .S3Uucc').click()
    //cy.get('#Accept').click()
    cy.get('.sdc-site-localnav__items > :nth-child(7) > .sdc-site-localnav__item-link')
        .type('Stats').should('have.value', 'Stats')


  })


  })
