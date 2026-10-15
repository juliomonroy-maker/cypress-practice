Cypress.Commands.add('login2', (usuario, contra) => {
     cy.visit("www.saucedemo.com")
     cy.get('[data-test="username"]').type(usuario)
     cy.get('[data-test="password"]').type(contra)
     cy.get('[data-test="login-button"]').click()
 })

 Cypress.Commands.add('login', (key = "standard") => {
     cy.fixture("users").then((users) => {
         const user = users[key]

         cy.session([user.username, user.password], () => {
             cy.visit("https://www.saucedemo.com/")
             cy.get('[data-test="username"]').type(user.username)
             cy.get('[data-test="password"]').type(user.password)
             cy.get('[data-test="login-button"]').click()
         })
     })
 })