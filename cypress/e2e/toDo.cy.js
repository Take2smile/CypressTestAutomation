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

let feedData = []

cy.get('.article-preview').then( article => {

 cy.wrap(article).each(( article, index, list) => {

  let feedObj = {}

  feed.elements.globalFeedTitle(index).then( feedTitle => {
    feedObj.title = feedTitle

    feed.getArticleTags(index).then( tagsObj => {
      feedObj.tags = tagsObj

      cy.wrap(feedObj).then( feedObj => {

        feedData.push(feedObj)

        console.log(feedObj)
  
  })
})})})

return cy.wrap(feedData)

})})

})
