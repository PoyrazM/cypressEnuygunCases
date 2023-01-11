
export default class FlightResultsPage {

    selectAirline (departureAirline) {
        cy.contains(departureAirline).click();
        return this;
    }

    selectAirlines(departureAirline, returnAirline) {
        cy.contains(departureAirline).click();
        cy.get('.flight-list-return').contains(returnAirline).click();
        return this;
    }
}