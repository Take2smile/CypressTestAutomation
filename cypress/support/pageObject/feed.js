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

    // getArticleTags(index){

    //     const articleTags = {}

    //     cy.get('.article-preview').eq(index).find('.tag-list').then( articleTags => {

    //         cy.wrap(articleTags).each(($el, index, $list) => {

    //            cy.wrap($el).invoke('text').then( tagText => {

    //             articleTags.index = tagText

    //            })

    //         })

    //     })

    // }

}

module.exports = new feed();