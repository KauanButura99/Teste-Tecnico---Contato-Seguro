/// <reference types="cypress" />


describe('Formulário', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    
    it('Cadastrando um novo usuário com sucesso', () => {
        cy.intercept('POST', 'http://localhost:8400/api/user/create').as('cadastroComSucesso')
        cy.cadastroComSucesso()
        cy.wait('@cadastroComSucesso').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(200)
        })
        
    })

    it('Cadastro sem preencher o campo Nome', () => {
        cy.intercept('GET', 'http://localhost:5400/static/media/close.f62862c6.svg').as('cadastroSemNome')
        cy.cadastroSemNome()
        cy.wait('@cadastroSemNome').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(304)
        })
    })

    it('Cadastro sem preencher o campo Email', () => {
        cy.intercept('GET', 'http://localhost:5400/static/media/close.f62862c6.svg').as('cadastroSemEmail')
        cy.cadastroSemEmail()
        cy.wait('@cadastroSemEmail').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(304)
        })
    })

    it('Cadastro sem preencher o campo Número', () => {
        cy.intercept('POST', 'http://localhost:8400/api/user/create').as('cadastroSemTelefone');
        cy.cadastroSemTelefone();
        cy.wait('@cadastroSemTelefone').then((interception) => {
            expect(interception.request.method).to.eq('POST');
            expect(interception.response.statusCode).to.eq(200); 
        });
    })

    it('Cadastro sem preencher o campo Cidade de nascimento', () => {
        cy.intercept('POST', 'http://localhost:8400/api/user/create').as('cadastroSemCidade');
        cy.cadastroSemCidade()
        cy.wait('@cadastroSemCidade').then((interception) => {
            expect(interception.request.method).to.eq('POST');
            expect(interception.response.statusCode).to.eq(200); 
        });
    })

    it('Cadastro sem a selecionar a data de nascimento do usuário', () => {
        cy.intercept('GET', 'http://localhost:5400/static/media/close.f62862c6.svg').as('cadastroSemData')
        cy.cadastroSemData()
        cy.wait('@cadastroSemData').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(304)
        })
    })

    it('Cadastro sem selecionar o campo empresa', () => {
        cy.intercept('GET', 'http://localhost:5400/static/media/close.f62862c6.svg').as('cadastroSemEmpresa')
        cy.cadastroSemEmpresa()
        cy.wait('@cadastroSemEmpresa').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(304)
        })
        cy.get('strong').should('contain', 'Atenção!')
    })

    
})