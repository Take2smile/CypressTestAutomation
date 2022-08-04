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

  const feedObj = {}
  
  feed.elements.globalFeedAuthor(1).then( feedAuthor => {
    feedObj.author = feedAuthor

  feed.elements.globalFeedDate(1).then( feedDate => {
    feedObj.date = feedDate

  feed.elements.globalFeedTitle(1).then( feedTitle => {
    feedObj.title = feedTitle

  feed.elements.globalFeedDesc(1).then( feedDesc => {
    feedObj.description = feedDesc

  feed.elements.globalFeedFavorites(1).then( feedFavorites => {
    feedObj.favorites = feedFavorites
 
})})})})})

  cy.log(feedObj)


 //feed.elements.globalFeedDate(1)

 

  


})


})



