///<reference types="cypress"/>


// Assertivas de igualdade
it('Equality', () => {
    const a = 1;
    
    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

//Assertivas de verdade
it ('Truthy', () => {
    const a =true;
    const b = null;
    let c; 
    // c não tem valor definido

    expect (a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

//equalidade de objetos
it('Object equality', () => {
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b:2 })
    expect(obj).eql({ a: 1, b:2})
    expect(obj).include({ a:1, })
    expect(obj).to.have.property( 'b' )
    expect(obj).to.have.property( 'b', 2 )
    expect(obj).to.not.be.empty
    expect({}).to.be.empty 
})


it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('Number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/^String/)
    //match(/String$/) está falando que espera que o método iniciei com 'String'
    expect(str).to.match(/teste$/)
    //match(/String$/) está falando que espera que o método finalize com 'teste'
    //match(/String$/) está falando que espera que o método finalize com 'String'  
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/\w+/)
    // match(/\w+/) verifica que existe apenas letras
    expect(str).to.match(/\D+/)
     // match(/\w+/) verifica que não existe números
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.212 
    
    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(5)
    expect(floatNumber).to.be.closeTo(5.2 , 0.1)
    // closeTo(5.2 , 0.1) está esperando que o número seja próximo de 5.2 com uma tolerância de 0.1
})