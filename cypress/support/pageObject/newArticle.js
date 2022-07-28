class newArticle {

    elements = {

        articleTitleInput: () => cy.get('[formcontrolname="title"]'),
        articleAboutInput: () => cy.get('[formcontrolname="description"]'),
        articleBodyInput: () => cy.get('[formcontrolname="body"]'),
        articleTagsInput: () => cy.get('[placeholder="Enter tags"]'),
        publishBtn: () => cy.get('.btn-primary'),
        errorMessage: () => cy.get('.error-messages')

    }
    typeArticleTitleInput(text){
        this.elements.articleTitleInput().type(text);
    }
    typeArticleAboutInput(text){
        this.elements.articleAboutInput().type(text);
    }
    typeArticleBodyInput(text){
        this.elements.articleBodyInput().type(text);
    }
    typeArticleTagsInput(text){
        this.elements.articleTagsInput().type(text + '{enter}');
    }
    clickPublishBtn(){
        this.elements.publishBtn().click();
    }

}
module.exports = new newArticle();