describe('Team assignments', () => {
    
    it('User can search for a location', function () {
        cy.get('.ant-menu-submenu-title .anticon')
            .click()
        cy.get('.ant-menu-inline .ant-menu-submenu-title')
            .eq(2)
            cy.contains('Teams')
            // .should('have.text', 'Teams')
            .click()
        cy.get('.ant-menu-item a[href="/admin/teams/team-assignment"]')
            .click()
        cy.get('input.ant-input.ant-input-lg')
            .type('Kericho')
            // .focused()
            // .clear()
    })
    it('User can assign a team', function () {
        cy.contains('Edit')
            .click()
        cy.get('.ant-form-item-control-input').click()    
        cy.contains('Team 1').click()
        cy.get('.ant-modal-header').click() 
         cy.get('.ant-modal-footer')
            .contains('Save')
            .click()   
       
    })

     
        
    // })
})