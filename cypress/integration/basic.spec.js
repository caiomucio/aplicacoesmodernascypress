///<reference types="cypress"/>

describe('Cypress básico', () => {
    it.only('Deve visitar a página e verificar o título ', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo de Treinamento')
        //Forma de organizar o código diferente
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo de Treinamento')

        cy.title().then(title =>{
            console.log(title)

        })
    })
    it('Deve encontrar e interagir com o elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        // o cypress está visitando o site através do .visit o cy get está pegando um elemento. O # significa que esse elemnto é uma id.
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        //cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')
        
    })

    /*
    cy.pause() permiti pausar a execeução do teste e executar o teste por partes
    cy.debug() permiti ter mais informações no console sobre os elementos de um ponto 
    */
})