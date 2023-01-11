import RegisterPage from "./RegisterPage";

class HomePage {

    REGISTER_BUTTON = '[id="ctx-RegisterBtn"]'

    clickLoginButton(){
        cy.get(this.REGISTER_BUTTON).click();
        return this;
    }

    getRegisterPage(){
        return new RegisterPage();
    }
}
export default HomePage