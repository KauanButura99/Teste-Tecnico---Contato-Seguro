const { faker } = require('@faker-js/faker')
const { format } = require('date-fns');

Cypress.Commands.add('cadastroComSucesso', () => {
    const nome = faker.person.firstName()
    const email = faker.internet.email()
    const telefone = faker.phone.number()
    const cidadeNas = faker.location.city()
    const dataAleatoria = faker.date.birthdate()
    const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

    cy.get('#new-user').click()
    cy.get('h2').should('contain', 'Cadastrar novo usuário')

    cy.get('[placeholder="Nome"]').type(nome)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(telefone)
    cy.get('[placeholder="Cidade de nascimento"]').type(cidadeNas)
    cy.get('[placeholder="Data de nascimento"]').type(dataFormatada)
    cy.get('#search_input').click();
    cy.get('.highlightOption').first().click().contains('Empresa 2').click();
    cy.get('.sc-eCImPb > button').click()
 })

 Cypress.Commands.add('cadastroSemNome', () => {
    const email = faker.internet.email()
    const telefone = faker.phone.number()
    const cidadeNas = faker.location.city()
    const dataAleatoria = faker.date.birthdate()
    const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

    cy.get('#new-user').click()
    cy.get('h2').should('contain', 'Cadastrar novo usuário')

    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(telefone)
    cy.get('[placeholder="Cidade de nascimento"]').type(cidadeNas)
    cy.get('[placeholder="Data de nascimento"]').type(dataFormatada)
    cy.get('#search_input').click();
    cy.get('.highlightOption').first().click().contains('Empresa 2').click();
    cy.get('.sc-eCImPb > button').click()
 })

 Cypress.Commands.add('cadastroSemEmail', () => {
    const nome = faker.person.firstName()
    const telefone = faker.phone.number()
    const cidadeNas = faker.location.city()
    const dataAleatoria = faker.date.birthdate()
    const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

    cy.get('#new-user').click()
    cy.get('h2').should('contain', 'Cadastrar novo usuário')

    cy.get('[placeholder="Nome"]').type(nome)
    cy.get('[placeholder="Telefone"]').type(telefone)
    cy.get('[placeholder="Cidade de nascimento"]').type(cidadeNas)
    cy.get('[placeholder="Data de nascimento"]').type(dataFormatada)
    cy.get('#search_input').click();
    cy.get('.highlightOption').first().click().contains('Empresa 2').click();
    cy.get('.sc-eCImPb > button').click()
 })

 Cypress.Commands.add('cadastroSemTelefone', () => {
    const nome = faker.person.firstName()
    const email = faker.internet.email()
    const cidadeNas = faker.location.city()
    const dataAleatoria = faker.date.birthdate()
    const dataFormatada = format(dataAleatoria, 'yyyy-MM-dd')

    cy.get('#new-user').click()
    cy.get('h2').should('contain', 'Cadastrar novo usuário')

    cy.get('[placeholder="Nome"]').type(nome)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Cidade de nascimento"]').type(cidadeNas)
    cy.get('[placeholder="Data de nascimento"]').type(dataFormatada)
    cy.get('#search_input').click();
    cy.get('.highlightOption').first().click().contains('Empresa 2').click();
    cy.get('.sc-eCImPb > button').click()
 })

