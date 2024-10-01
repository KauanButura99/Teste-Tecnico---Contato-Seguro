/// <reference types="cypress" />


describe('Formulário', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastrando um novo usuário com sucesso', () => {
        cy.cadastroComSucesso()
        cy.get('#new-user').should('contain', 'Novo Usuário')
    })

    it('Cadastro sem o nome do usuário', () => {
        cy.cadastroSemNome()
        cy.get('[placeholder="Nome"]').should('have.value', '')
    })

    it('Cadastro sem o email do usuário', () => {
        cy.cadastroSemEmail()
        cy.get('[placeholder="Email"]').should('have.value', '')
    })

    it.only('Cadastro sem o número do usuário', () => {
        cy.cadastroSemTelefone()
        cy.request({
            metohod: 'POST',
            url: 'http://localhost:5400/'
        }).then((response) =>{
            
            expect(response.status).to.equal(200)
        })
    })

    it('Cadastro sem a cidade do usuário', () => {
        cy.cadastro()
    })

    it('Cadastro sem a data de nascimento do usuário', () => {
        cy.cadastro()
    })

    it('Cadastro sem a empresa do usuário', () => {
        cy.cadastro()
    })


    



})