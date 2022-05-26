///<reference types="cypress"/>

describe('Espera..', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
    })
    beforeEach(()=> {
        cy.reload()
        
    })
    it('Aguardando elemento disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        // verificando a existencia do campo
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Digitando Aqui')
    })
    it('fazendo retry', () => {
        cy.get('#novoCampo').should('not.exist')
        // verificando a existencia do campo
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
        //.should('not.exist') quando se faz esse encadeamento, ele não deixa prosseguir pois ele estabelece que o elemento não existe
        .should('exist')
        cy.get('#novoCampo').type('Digitando Aqui')
    })
    it('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista ')
        .find('span')
        .should('contain','Item 1' )
         /*cy.get('#lista ')
        .find('span')
        .should('contain','Item 2' ) */
        // essa forma acima nao vai funcionar na lista dom porque o elemento vai ser removido quando o outro for adicionado, assim o cypress vai ficar procurando algo que não existe mais
        cy.get('#lista li span')
        .should('contain', 'Item 2')
    })
    it('Uso do timeout', ()=> {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', {timeout:5000} ).should('exist')
        // setting a manual timeout
        // if need be, increase the time of all cypress through cypress.json when working with a slow API
        cy.get('#buttonListDOM').click()
        //cy.wait(5000) 
        //should not use "wait" on projects because it's always make the cypress wait this time, even it's not necessaire. preferably the timeout
        cy.get('#lista li span', {timeout:10000})
        .should('contain', 'Item 2')
    })

    it('click Retry', () => {
        cy.get('#buttonCount').click()
        .should('have.value', "1")
        //this work because when "click", there is a time before the value change to "11", but the "should" get's the value "1" before this change
        // .should('have.value', '11') do not work because cypress try to verify both condicions at the same time
        cy.get('#buttonCount').should('have.value', "11")
        
    })

    it.only('shold and then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista').then($el => {
        //cy.get('#lista').should($el => {
            console.log($el)
            expect($el).have.length(1)
        // if try with "should", the console will print the console.log until do the "expect". If use the "the" the console will print just one time the console.log. this happens because "should" will continue executing until finish the search
        })
        
        //cy.get('#buttonListDOM').then($el => {
        // when use "return" with "then", the "return" will change always for the "return"
        cy.get('#buttonListDOM').should($el => {
        //  when  use "return" with "should", the "should" always return for the object or
        return 2
        }).and('have.id', 'buttonListDOM')
    
    })
})