class feed {

    elements = {

        sidebarTag: (tagName) => cy.get('.sidebar > .tag-list').contains(`${tagName}`),
        yourFeedToggle: () => cy.get('.feed-toggle').contains('Your Feed'),
        globalFeedToggle: () => cy.get('.feed-toggle').contains('Global Feed')
    }

}

module.exports = new feed();