class feed {

    elements = {

        sidebarTag: (tagName) => cy.get('.sidebar > .tag-list').contains(`${tagName}`),
        yourFeedToggle: () => cy.get('.feed-toggle').contains('Your Feed'),
        globalFeedToggle: () => cy.get('.feed-toggle').contains('Global Feed'),
        globalFeedAuthor: (index) => cy.get('.article-preview').eq(index).find('.author').invoke('text'),
        globalFeedDate: (index) => cy.get('.article-preview').eq(index).find('.date').invoke('text'),
        globalFeedTitle: (index) => cy.get('.article-preview').eq(index).find('h1').invoke('text'),
        globalFeedDesc: (index) => cy.get('.article-preview').eq(index).find('p').invoke('text'),
        globalFeedFavorites: (index) => cy.get('.article-preview').eq(index).find('app-favorite-button').invoke('text')
    }

    getArticleTags(index) {

        let articleTags = {}
        let i = 0;

        cy.get('.article-preview').eq(index).find('.tag-list li')
            .then(allArticleTags => {

                cy.wrap(allArticleTags).each( tag => {

                    cy.get(tag).invoke('text')
                        .then(tagText => {

                            i++

                            articleTags[i] = tagText

                        })

                })

            })
    return cy.wrap(articleTags)
    
    }

}

module.exports = new feed();