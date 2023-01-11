/// <reference types="cypress" />
import HomePage from "./pages/HomePage";

const startTest = new HomePage();
const userData = require('../fixtures/userData.json');


describe('Sign Up Test', () => {

    before(() => {
        cy.visit('ucak-bileti/');
    });


    it('Successfully Sign Up Test',  () => {
        startTest
            .clickLoginButton()
            .getRegisterPage()
            .typeUsername(userData.email)
            .typePassword(userData.password)
            .clickSubmitButton()
            .signOut();
    });

    it('Login Test with Invalid Email', () => {
        startTest
            .clickLoginButton()
            .getRegisterPage()
            .typeUsername(userData.invalidEmail)
            .typePassword(userData.password)
            .clickSubmitButton();
    });

    it('Login Test with Invalid Password', () => {
        startTest
            .clickLoginButton()
            .getRegisterPage()
            .typeUsername(userData.email)
            .typePassword(userData.invalidPassword)
            .clickSubmitButton();
    });

    it('Login Test with Invalid Email and Invalid Password', () => {
        startTest
            .clickLoginButton()
            .getRegisterPage()
            .typeUsername(userData.invalidEmail)
            .typePassword(userData.invalidPassword)
            .clickSubmitButton();
    });
});