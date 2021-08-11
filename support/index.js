// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:


// import auth0 from 'auth0-js';

// Alternatively you can use CommonJS syntax:
// require('./commands')

describe('Authentication', () => {
    
    it('log in with valid credentials', () => {
      const username = Cypress.env('username')
      const password = Cypress.env('password')
      cy.visit('/')
      cy.get('input[name="username"]').clear()
          .type(username)
      cy.get('input[name="password"]').type(password, { log: false })
      cy.get('#kc-login').click()     
    })
      
})

