/// <reference types="cypress" />

import feed from '../support/pageObject/feed'
import header from '../support/pageObject/header'
import newArticle from '../support/pageObject/newArticle'
import singInPage from '../support/pageObject/singInPage'

describe('toDo', () => {


  it('quickTest', function () {

    cy.login()

    cy.intercept('GET', 'https://api.realworld.io/api/articles/**').as('getArticles')
    
    
    cy.wait('@getArticles')

    let feedData = []

  

  cy.get('.article-preview').each(( article, index, list) => {

    let feedObj = {}
  
  feed.elements.globalFeedAuthor(index).then( feedAuthor => {
    feedObj.author = feedAuthor

  feed.elements.globalFeedDate(index).then( feedDate => {
    feedObj.date = feedDate

  feed.elements.globalFeedTitle(index).then( feedTitle => {
    feedObj.title = feedTitle

  feed.elements.globalFeedDesc(index).then( feedDesc => {
    feedObj.description = feedDesc

  feed.elements.globalFeedFavorites(index).then( feedFavorites => {
    feedObj.favorites = feedFavorites

  feed.getArticleTags(index).then( tagsObj => {
    feedObj.tags = tagsObj

    feedData.push(feedObj)
    cy.log(feedData)

  })})})})})})

})

return cy.wrap(feedData)

})
})



