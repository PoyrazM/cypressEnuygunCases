/// <reference types="cypress"/>

import HomePage from "../FlightTest/pages/HomePage";

const startTest = new HomePage();
const onewayDatas = require('../fixtures/oneWayFlight.json');
const roundTripDatas = require('../fixtures/roundTripFlight.json');

describe('Enuygun Flight Select Test', ()  => {

    beforeEach(() => {
        cy.visit('');
    })

    it('OneWay Flight Select Test', () => {
        startTest
            .fillOriginField(onewayDatas.originPoint)
            .fillDestinationField(onewayDatas.destinationPoint)
            .clickDatePicker()
            .selectDepartureDate(onewayDatas.departureDate)
            .selectReturnDate(onewayDatas.isReturn, onewayDatas.returnDate)
            .selectDirect(onewayDatas.isDirect)
            .clickSubmitButton()
            .getFlightResultsPage()
            .selectAirline(onewayDatas.departureAirline);
    });

    it('RoundTrip Flight Select Test', () => {
        startTest
            .fillOriginField(roundTripDatas.originPoint)
            .fillDestinationField(roundTripDatas.destinationPoint)
            .clickDatePicker()
            .selectDepartureDate(roundTripDatas.departureDate)
            .selectReturnDate(roundTripDatas.isReturn, roundTripDatas.returnDate)
            .selectDirect(roundTripDatas.isDirect)
            .clickSubmitButton()
            .getFlightResultsPage()
            .selectAirlines(roundTripDatas.departureAirline, roundTripDatas.returnAirline);
    });
});

