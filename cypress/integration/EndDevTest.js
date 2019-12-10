/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {

  })

  it(' From Google.com search for and click on Endeavor Streaming', () => {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('endeavor streaming')
        .should('have.value', 'endeavor streaming')

    cy.get(':nth-child(1) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span')
        .click()

  })

  it('Verify that Innovate page can be navigated to URL contains endeavor streaming ', () => {

    cy.visit('https://www.endeavorstreaming.com/')

    it('Navigate Through page verify that endeavor streaming appears in the URL ', () => {


    cy.contains('INNOVATE')

    cy.url()
        .should('include', 'endeavorstreaming')

  })


  })

})
