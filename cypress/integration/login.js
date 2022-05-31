describe("login test",()=>{
    it('wrong email',()=>{
        cy.visit('/')
        cy.get('#login__email').type('mohdasdsaadsasdamed@instabug.com')
        cy.get('#login__password').type('A12345678')
        cy.get('.login__submit').click();
        cy.get('.login__invalid-emai-password').should('not.have.class', 'hidden')
        // $btn.hasClass('active')
    })
    it('wrong password',()=>{
        cy.visit('/')
        cy.get('#login__email').type('mohamed@instabug.com')
        cy.get('#login__password').type('A123dasdas45678')
        cy.get('.login__submit').click();
        cy.get('.login__invalid-emai-password').should('not.have.class', 'hidden')
        // $btn.hasClass('active')
    })
    it('correct data',()=>{
        cy.visit('/')
        cy.get('#login__email').type('mohamed@instabug.com')
        cy.get('#login__password').type('A12345678')
        cy.get('.login__submit').click();
        cy.url().should('eq', `${Cypress.config('baseUrl')}/Welcome`)
        // $btn.hasClass('active')
    })
})