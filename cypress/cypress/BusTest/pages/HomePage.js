import BusResultsPage from "./BusResultsPage";

export default class HomePage {

    ORIGIN_INPUT = '[data-testid="originsearchInput"]';
    DESTINATION_INPUT = '[data-testid="destinationsearchInput"]';
    DATE_PICKER = '[data-testid="search-from_datepicker"]';
    SUBMIT_BUTTON = 'Otobüs bileti bul';


    fillOriginField(originPoint) {
        cy.get(this.ORIGIN_INPUT).first().type(originPoint);
        return this;
    }

    fillDestinationField(destinationPoint) {
        cy.get(this.DESTINATION_INPUT).first().type(destinationPoint)
            .get('ul[role="listbox"]').first().click();
        return this;
    }

    selectDay(addDay) {
        const date = new Date();
        date.setDate(date.getDate() + addDay);

        const futureYear = date.getFullYear();
        const futureMonth = date.toLocaleString("default", {month: "long"});
        const futureDay = date.getDate();

        cy.log('Future Year to Select: ' + futureYear);
        cy.log('Future Month to Select: ' + futureMonth);
        cy.log('Future Day to Select ' + futureDay);

        cy.get(this.DATE_PICKER).first().click();

        function selectMonthAndYear() {
            cy.get('.DayPicker_transitionContainer:visible').find('div > div > strong').eq(1).then(currentDate => {
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

    clickSubmitButton() {
        cy.contains(this.SUBMIT_BUTTON).click();
        return this;
    }

    getBusResultsPage() {
        return new BusResultsPage();
    }
}