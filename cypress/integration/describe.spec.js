///<reference types="cypress"/>
// Esse comando fala para o vscode que se está trabalhando com o cypress

it(' Texte externo ', () => {

})

/*
.skip antes de um describe ou it faz com que esse teste ou grupo de teste não seja executado. Pode usar mais de um
.only em um it ou describe vai executar apenas esse teste ou esse grupo de teste
no caso do only deve-se usar apenas um em todo código. Se usar mais de um, o cypress vai utilizar apenas o último colocado
*/ 

//describe tem a função de agrupar os testes, permitindo uma melhor organização no cypress
describe(' Deve agrupar  testes', () => {
// É possível agrupar um grupo dentro de outro grupo, desta forma podemos criar grupos menores
    describe('Deve agrupar testes mais específicos', () => {
        it('Teste detalhado', () => {

        })
    })
    it(' Texte interno ', () => {

    })
})