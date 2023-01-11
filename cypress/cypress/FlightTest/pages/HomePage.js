import FlightResultsPage from "./FlightResultsPage"

const date = new Date();

export default class HomePage {

    ORIGIN_FIELD = '#OriginInput';
    SELECT_ROUTE = '.suggestion_item';
    DESTINATION_FIELD = '#DestinationInput';
    DATE_PICKER = '.SingleDatePicker';
    ONEWAY_CHECKBOX = '#oneWayCheckbox';
    TRANSIT_FILTER_CHECKBOX = '#transitFilter';
    SUBMIT_BUTTON = 'Ucuz bilet bul';

    fillOriginField(originPoint) {
        cy.get(this.ORIGIN_FIELD)
            .type(originPoint)
            .get(this.SELECT_ROUTE)
            .first()
            .click();
        return this;
    }

    fillDestinationField(destinationPoint) {
        cy.get(this.DESTINATION_FIELD)
            .type(destinationPoint)
            .get(this.SELECT_ROUTE)
            .first()
            .click();
        return this;
    }

    clickDatePicker() {
        cy.get(this.DATE_PICKER).first().click();
        return this;
    }

    selectDepartureDate(addDay) {
        date.setDate(date.getDate() + addDay);
        const futureYear = date.getFullYear();
        const futureMonth = date.toLocaleString("default", {month: "long"});
        const futureDay = date.getDate();

        function selectMonthAndYear() {
            cy.get('[aria-label="Calendar"]').find('div > div > strong').eq(1).then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('[aria-label="Move forward to switch to the next month."]').click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.DayPicker_transitionContainer:visible').find('div > div > strong').eq(1).then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('[aria-label="Move forward to switch to the next month."]').click();
                        selectMonthAndYear();
                    }
                })
            })
        }
        function selectFutureDay() {
            cy.get('.CalendarDay:visible').contains(futureDay).click();
        }
        selectMonthAndYear();
        selectFutureDay();
        return this;
    }

    selectReturnDate(isReturn, addDay) {
        if (isReturn) {
            cy.get(this.ONEWAY_CHECKBOX).click();
            this.selectDepartureDate(addDay);
        }
        return this;
    }

    selectDirect(isDirect) {
        if (isDirect) {
            cy.get(this.TRANSIT_FILTER_CHECKBOX).click();
        }
        return this;
    }

    clickSubmitButton() {
        cy.contains(this.SUBMIT_BUTTON).click();
        return this;
    }

    getFlightResultsPage() {
        return new FlightResultsPage();
    }
}