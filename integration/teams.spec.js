describe('Teams functions', () => {
         
    it('User can search for a team', function () {
        cy.get('.ant-menu-submenu-title .anticon')
        .click()
        cy.get('.ant-menu-inline .ant-menu-submenu-title')
        .eq(2)
        cy.contains('Teams')
        .click()
    cy.get('.ant-menu-item a[href="/admin/teams"]')
        .click()
        
        })

    it('User can create a team', function () {
        cy.get('div a[href="/admin/teams/add"]')
            .should('have.text', 'Create Team')
            .click()
        cy.get('.ant-form-item-control-input-content input#name')
            .type('Testers')
        cy.get('.ant-form-item-control-input .ant-radio-wrapper .ant-radio')
            .eq(1)
            .click()
        cy.get('.ant-form-item-control-input-content .ant-select-show-search')
            .click()
        cy.get('.ant-select-dropdown')
            .should('be.visible')
        cy.get('.rc-virtual-list .ant-select-item[title="CRVS Agent"]')
            .click()
        cy.get('.ant-form-item-label')
            .eq(2)
            .click()
        cy.get('button#submit')
            .click()           
    })

    it('User can move to the next page of the teams list', function () {
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

    it('User can edit a teams details', function () {
        cy.get('table tbody tr:nth-child(3) td:last-child a')
            .should('have.text', 'Edit')
            .click()
        cy.get('.ant-form-item-control-input input[type="text"]')
            .clear()
            .type('New Group')
        cy.get('.ant-form-item-control-input button[type="submit"]')
            .click()
    })

    it('User can view a teams details', function () {
        cy.get('table tbody tr:nth-child(3) td:last-child .more-options')
            .click()
        cy.get('.ant-dropdown ul li.viewdetails')
            .should('have.text', 'View Details')
            .click()
        cy.get('.anticon.anticon-close')
            .click( { multiple: true } )
        cy.get('button.close-btn')
            .click()
    })
})
