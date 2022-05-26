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

    it('Textos', () => {
        cy.get('#formNome').type('Caio')
        cy.get('#formNome').should('have.value','Caio')
        //para verificar o texto digitado devemos utilizar o atributo value 

        cy.get('#elementosForm\\:sugestoes').type('sugestões')
        // foi colocado uma segunda \ porque caso tivesse apenas uma, o cy iria entender que existiria apenas o :, ou seja, sempre que tiver \: no elemento, devemos colocar \\:
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('Caio').should('have.value','Caio')

        cy.get('#formSobrenome').type('Caio Mucioo{backspace}')
        //{backspace} exclue o último caractere inserido

        cy.get('#formSobrenome')
        .clear()
        .type('Furtado {selectall}Mucio Furtado',{delay:100}).should('have.value','Mucio Furtado')
        //.clear() esta limpando o campo digitado completamente
        //{selectall} limpa tudo que foi digitado antes dele 
        // {delay} esta fazendo a execução demorar mais 100ms para podermos ver o que está sendo feito. 
    })

    it('Radio button', () =>{
        cy.get("[name='formSexo']").should('have.length', 2)
        // verificando que existe duas opçoes para o usuário marcar
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')
    })
    it('Check box', () => {
        cy.get('[name="formComidaFavorita"]')
        .should('have.length', 4)
        .click({multiple:true})
        // {multiple:true} esta fazendo clicar nos 4 elemntos pois o click() so pode clicar em apenas em um elemento 
        .should('be.checked')
        // verificando que os 4 foram marcados
        cy.get('#formComidaCarne').click().should('not.be.checked')
        //pedindo para clicar novamente ele vai desmarcar a opção 
    })
    it.only('Combo box', () =>  {
        cy.get('[data-test=dataEscolaridade]') 
        //pegando o combo inteiro
        .select('2grauincomp')
        //selecionando o desejado pelo value.Poderia colcoar tambem o texto visível
        .should('have.value', '2grauincomp')    
    })
    it.only('Combo Múltiplo', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao',"Corrida"])
        // deve ser inserido os value dos elementos desejados
        
    })
})