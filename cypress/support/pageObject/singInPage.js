class singInPage {

    elements = {

        emailInput: () => cy.get('[ng-reflect-name="email"]'),
        passwordInput: () => cy.get('[ng-reflect-name="password"]'),
        needAnAcc: () => cy.contains('Need an account?'),
        submitBtn: () => cy.get('button[type="submit"]'),
        pageTitle: () => cy.get('h1.text-xs-center').contains('Sign in')

    }
    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSubmitBtn() {
        this.elements.submitBtn().click();
    }

    clickNeedAnAcc() {
        this.elements.needAnAcc().click();
    }
}
module.exports = new singInPage();