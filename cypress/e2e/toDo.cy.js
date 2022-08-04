/// <reference types="cypress" />

import feed from '../support/pageObject/feed'
import header from '../support/pageObject/header'
import newArticle from '../support/pageObject/newArticle'
import singInPage from '../support/pageObject/singInPage'

describe('toDo', () => {

  it('quickTest', () => {


      cy.login()

cy.intercept('GET', 'https://api.realworld.io/api/articles/**').as('getArticles')


cy.wait('@getArticles')

const articleTags = {}

        cy.get('.article-preview').eq(1).find('.tag-list li').then( articleTags => {

            cy.wrap(articleTags).each( tag => {

               cy.get(tag).invoke('text').then( tagText => {

                articleTags.test = tagText

               })

            })

        })

 cy.log(articleTags)

})

})
