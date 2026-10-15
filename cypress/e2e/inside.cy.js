describe('template spec', () => {

  beforeEach(()=>{
    cy.login("standard_user","secret_sauce")
    cy.visit("https://www.saucedemo.com/inventory.html",{failOnStatusCode: false})
  })
  
  it('passes', () => {

    cy.fixture("users").then((pei)=>{
      cy.log(pei.standard.username)
      cy.log(pei.standard.password)
      cy.log(pei.locked.username)
    })
  })

  it('', () => {
    
  });
})