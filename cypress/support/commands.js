Cypress.Commands.add('login2', (usuario, contra) => { 
    cy.visit("www.saucedemo.com")
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(contra)
    cy.get('[data-test="login-button"]').click()
 })

 Cypress.Commands.add('login',(username,password)=>{

    cy.session([username,password],()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()

    })
 })