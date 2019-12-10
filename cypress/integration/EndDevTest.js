/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com')
  })

  it('Verify that endeavor streaming can be searched for in google', () => {
    cy.get('.gLFyf').type('endeavor streaming')
        .should('have.value', 'endeavor streaming')

    cy.get(':nth-child(1) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span')
        .click()

  })

  it('Navigate Through page verify that endeavor streaming appears in the URL ', () => {


    it('Navigate Through page verify that endeavor streaming appears in the URL ', () => {

      cy.visit('https://www.endeavorstreaming.com/')
      cy.get('.Header-nav-inner > [href="/about"]')
        .click()

    cy.contains('INNOVATE')

    cy.url()
        .should('include', 'endeavorstreaming')

  })


  })

})
