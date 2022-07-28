class header {

    elements = {

        pageBrand: () => cy.get('.navbar-brand'),
        homeLink: () => cy.get('.nav-link').contains('Home'),
        singInLink: () => cy.get('.nav-link').contains('Sign in'),
        singUpLink: () => cy.get('.nav-link').contains('Sign up'),
        newArticleLink: () => cy.get('.nav-link').contains('New Article'),
        settingsLink: () => cy.get('.nav-link').contains('Settings'),
        loginUserLink: () => cy.get('.nav-link').contains('loginUser')
    }

    clickPageBrand() {
        this.elements.pageBrand().click();
    }
    clickHomeLink() {
        this.elements.homeLink().click();
    }
    clickSingInLink() {
        this.elements.singInLink().click();
    }
    clickSingUpLink() {
        this.elements.singUpLink().click();
    }
    clickNewArticleLink() {
        this.elements.newArticleLink().click();
    }
    clickSettingsLink() {
        this.elements.settingsLink().click();
    }
    clickLoginUserLink() {
        this.elements.loginUserLink().click();
    }


}
module.exports = new header();