///<reference types="cypress"/>

describe('Basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //before esta fazendo que antes dos testes executarem vai ser acessado essa página
    })
    beforeEach(()=> {
        cy.reload()
        //beforeEach faz com que antes de cada teste vai ser recarregado a página, isso faz com se evite cometer erros devido a interações de testes anteriores
    })

    it('Text', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        //foi achado o elemnto com o selector do cypress. Porém é sempre importante verificar no html se não existe esse elemento de forma repetida. para isso basta selecionar o elemento com o inspecionar aberto e dar crtl + f. com isso ele vai abrir uma barra de busca e basta buscar se existe um elemento com apenas esse nome 
        cy.get('[class = "facilAchar"]').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        //o '. de facilAchar significa que ele é uma class. quando não se qual item usamos para identifica o elemento usamos [elemento= "nomedoelemento"]
        
    })
    it('Links', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('a').first().click()
        // esse first foi colocado para informar ao cypress cliclar no primeiro link
        cy.get('[href="#"]').click() 
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
})