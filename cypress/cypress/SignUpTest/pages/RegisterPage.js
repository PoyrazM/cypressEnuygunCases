export default class RegisterPage {

    USERNAME_INPUT = '//*[@name="_email"]'
    PASSWORD_INPUT = '//*[@name="_password"]'
    SUBMIT_BUTTON = '.membership--register-button'
    USERNAME_BUTTON = '[data-testid="username"]'

    typeUsername(username){
        cy.xpath(this.USERNAME_INPUT).type(username)
        return this;
    }

    typePassword(password){
        cy.xpath(this.PASSWORD_INPUT).type(password)
        return this;
    }

    clickSubmitButton(){
        cy.get(this.SUBMIT_BUTTON).click()
        cy.wait(2000).reload();
        return this;
    }

    signOut() {
        cy.get(this.USERNAME_BUTTON).click();
        cy.contains('Çıkış').click();
        cy.wait(3000);
        return this;
    }
}