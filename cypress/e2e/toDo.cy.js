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

feed.elements.globalFeedAuthor().should('contains', 'Gerome')

//cy.get('.article-preview').eq('0').find('.author').invoke('text').should('contain', 'Gerome')

//feed.elements.globalFeedToggle()






  })


})