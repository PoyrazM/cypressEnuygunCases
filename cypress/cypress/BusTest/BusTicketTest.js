/// <reference types="cypress"/>

import HomePage from "../BusTest/pages/HomePage";

const startTest = new HomePage();
const busDatas = require('../fixtures/busData.json');

describe('Enuygun Bus Select Test', () => {
    beforeEach(() => {
        cy.visit('otobus-bileti/');
    });

    it('Bus Select Test', () => {
        startTest
            .fillOriginField(busDatas.originInput)
            .fillDestinationField(busDatas.destinationInput)
            .selectDay(busDatas.addedDay)
            .clickSubmitButton()
            .getBusResultsPage()
            .getBusBrand(busDatas.busses)
            .selectAvailableSeat()
            .selectGender(busDatas.gender)
            .clickSubmitButton();
    });
});
