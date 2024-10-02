const { faker } = require('@faker-js/faker')
const { format } = require('date-fns');

Cypress.Commands.add('preencherFormulario', (nome, email, telefone, cidadeNas, dataFormatada, clickEmpresa) => {
    cy.get('#new-user').click()
    cy.get('h2').should('contain', 'Cadastrar novo usuário')

    if(nome)cy.get('[placeholder="Nome"]').type(nome)
    if(email)cy.get('[placeholder="Email"]').type(email)
    if(telefone)cy.get('[placeholder="Telefone"]').type(telefone)
    if(cidadeNas)cy.get('[placeholder="Cidade de nascimento"]').type(cidadeNas)
    if(dataFormatada)cy.get('[placeholder="Data de nascimento"]').type(dataFormatada)
    if(clickEmpresa) {
      cy.get('#search_input').click();
      cy.get('.highlightOption').first().click().contains('Empresa 2').click();
    }
    cy.get('.sc-eCImPb > button').click()
 })

 Cypress.Commands.add('cadastroComSucesso', () => {
   const nome = faker.person.firstName()
   const email = faker.internet.email()
   const telefone = faker.phone.number()
   const cidadeNas = faker.location.city()
   const dataAleatoria = faker.date.birthdate()
   const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

   cy.preencherFormulario(nome, email, telefone, cidadeNas, dataFormatada, true)
   }) 

 Cypress.Commands.add('cadastroSemNome', () => {
    const email = faker.internet.email()
    const telefone = faker.phone.number()
    const cidadeNas = faker.location.city()
    const dataAleatoria = faker.date.birthdate()
    const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

    cy.preencherFormulario(null, email, telefone, cidadeNas, dataFormatada, true)
 })

 Cypress.Commands.add('cadastroSemEmail', () => {
   const nome = faker.person.firstName()
   const telefone = faker.phone.number()
   const cidadeNas = faker.location.city()
   const dataAleatoria = faker.date.birthdate()
   const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

   cy.preencherFormulario(nome, null, telefone, cidadeNas, dataFormatada, true)
 })

 Cypress.Commands.add('cadastroSemTelefone', () => {
   const nome = faker.person.firstName()
   const email = faker.internet.email()
   const cidadeNas = faker.location.city()
   const dataAleatoria = faker.date.birthdate()
   const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

   cy.preencherFormulario(nome, email, null, cidadeNas, dataFormatada, true)
 })

 Cypress.Commands.add('cadastroSemCidade', () => {
   const nome = faker.person.firstName()
   const email = faker.internet.email()
   const telefone = faker.phone.number()
   const dataAleatoria = faker.date.birthdate()
   const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

   cy.preencherFormulario(nome, email, telefone, null, dataFormatada, true)
})

Cypress.Commands.add('cadastroSemData', () => {
   const nome = faker.person.firstName()
   const email = faker.internet.email()
   const telefone = faker.phone.number()
   const cidadeNas = faker.location.city()
   const dataAleatoria = faker.date.birthdate()
   

   cy.preencherFormulario(nome, email, telefone, cidadeNas, null, true)
})


Cypress.Commands.add('cadastroSemEmpresa', () => {
   const nome = faker.person.firstName()
   const email = faker.internet.email()
   const telefone = faker.phone.number()
   const cidadeNas = faker.location.city()
   const dataAleatoria = faker.date.birthdate()
   const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

   cy.preencherFormulario(nome, email, telefone, cidadeNas, dataFormatada, null)
})

