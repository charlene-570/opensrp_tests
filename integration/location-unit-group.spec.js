import { beforeEach } from "mocha"
const units = require('../fixtures/location.json')
describe('Location unit group', () => { 

        it('search Location Unit Group' , function ()  {
            
        cy.get('.ant-menu-submenu-title')
        .click({force: true}) 
        cy.contains('Locations')
            .click()
        cy.contains('Location unit group')
                    .click()
        cy.get('.ant-input-prefix').type('TEST10TEST11')
       
                     
         })

        it('User can edit a location group', function () {
        cy.contains('Edit')
            .click()
        cy.get('#submit')
            .contains('Save')
            .click()
    }) 
        
        
                
      Array.from(units).forEach(function(test, index) {
        it(test.name , function ()  {
        cy.contains('Add Location Unit Group')
            .click()

        cy.get('input[name="name"]').type(test.unit , {force: true})
        cy.get('.ant-radio-group .ant-radio')
            .eq(1)
            .click()    
        cy.get('.ant-form-item-control-input textarea.ant-input')
            .type('Just a test group')
                     
        cy.contains('Save')
            .click({ multiple: true, force: true })
            
    })
})

    it('User can move to the next page of the location group list', function () {
        cy.get('.ant-pagination-item-link')
            .click({multiple: true, force: true})
    })

    it('User can view more than 5 location groups per page', function () {
        cy.get('.ant-pagination-options .ant-select-selector')
            .click()
        cy.get('.rc-virtual-list-holder-inner div[title="10 / page"]')
            .click()
        cy.get('.ant-pagination-options .ant-select-selector')
            .click()
        cy.get('.rc-virtual-list-holder-inner div[title="20 / page"]')
            .click()
    })

})
