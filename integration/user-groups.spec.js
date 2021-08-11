describe('User Groups functions', () => {
    
    it('User can add a new user group', function () {
        cy.get('.ant-menu-submenu-title .anticon')
            .click()
            cy.get('.ant-menu-inline .ant-menu-submenu-title')
            .eq(2)
            cy.contains('Users')
            .click()
        cy.get('.ant-menu-item a[href="/admin/users/groups"]')
            .click()
            cy.contains('New User Group')
            .click()
            cy.get('#name').type('User 97')
            cy.contains('Save').click()
       
    })

    it('User can edit a group details', function () {
        cy.get('.ant-checkbox')
        .click({multiple: true, force: true}) 
        cy.contains('Save').click()
    })
    it('User can search for a role', function () {
            cy.get('.ant-menu-inline .ant-menu-submenu-title')
            .eq(3)
            .click()
        cy.get('.ant-menu-item a[href="/admin/users/roles"]')
            .click()
        cy.get('.search-input-wrapper .ant-input-affix-wrapper-lg')
            .type('ANC CHW')
        cy.get('.ant-input-suffix .ant-input-clear-icon')
            .click()      
        })

        it('User can move to the next page of the roles list', function () {
            cy.get('.ant-pagination .ant-pagination-next')
                .click()
    })
    it('User can view more than 5 teams per page', function () {
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
