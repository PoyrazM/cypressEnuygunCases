export default class BusResultsPage {

    SEAT = '.hover-active';

    getBusBrand(busBrand) {
        cy.get('[alt="'+ busBrand +'"]').first().click();
        return this;
    }

    selectAvailableSeat() {
        cy.get(this.SEAT).first().click();
        return this;
    }

    selectGender(gender) {
        cy.get('#gender_popper_' + gender + '').click();
        return this;
    }

    clickSubmitButton() {
        cy.contains('Onayla ve Devam Et').click();
        return this;
    }
}