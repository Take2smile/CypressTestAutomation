/// <reference types="cypress" />

import header from '../support/pageObject/header'
import newArticle from '../support/pageObject/newArticle'
import singInPage from '../support/pageObject/singInPage'

describe('toDo', () => {

  it('quickTest', () => {


      cy.login()

      cy.visit('/editor')
      
      cy.wait(10000)
    //test commit
    
    newArticle.typeArticleTitleInput('Test Title')
    newArticle.typeArticleAboutInput('Article About Test')
    newArticle.typeArticleBodyInput('Test body for article')
    newArticle.typeArticleTagsInput('TestTag')
   // newArticle.clickPublishBtn()






  })


})