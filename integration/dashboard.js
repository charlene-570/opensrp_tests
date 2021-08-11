describe('Logout', () => {
  it('User can logout', function () {  
    const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click() 
      cy.get('.ant-avatar-string').click()
      cy.contains('Logout').click()
     
  })

})
describe('Manage Account', () => {
  it('User can manage account', function () {  
    const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click() 
      cy.get('.ant-avatar-string').click()
      cy.contains('Manage account').click()
     
  })

})

describe('OpenSrp logo', () => {
  it('User can click on Opensrp logo', function () {  
    const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click() 
      cy.get('.logo').click()
      
     
  })

})
describe('Adminn-tile', () => {
  it('User can click on Admin tile', function () {  
   
        cy.get('.admin-link ')
        .click({ multiple: true})
        // cy.contains('.admin-link').click()
    
    
    })
  })
    describe('Teams-tile', () => {
    it('User can click on Teams tile', function () { 
      const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click()     
     cy.contains('Teams').click()
  
  
  })
  
})
describe('Location-unit-tile', () => {
  it('User can click on Location unit tile', function () {  
    const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click()  
   cy.contains('Location unit').click()


})

})
describe('Location-unit-group-tile', () => {
  it('User can click on Location unit group tile', function () {  
    const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click()  
   cy.contains('Location unit group').click()


})

})
describe('Team-Assignmenent-tile', () => {
  it('User can click on Team Assignment tile', function () {  
    const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click()  
   cy.contains('Team Assignment').click()


})

})
 



  
