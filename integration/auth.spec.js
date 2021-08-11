// import { beforeEach } from "mocha"
const tests = require('../fixtures/keywords.json')
describe('login', () => {
 

  tests.forEach(test => {
      it(test.name , function ()  {
      
      cy.visit('/')
      cy.get('#username').type(test.username)
      cy.get('#password').type(test.password)
      cy.get('#kc-login').click()
      cy.contains('Invalid username or password.')
      })
    
    })
})




