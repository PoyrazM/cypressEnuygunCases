/// <reference types="cypress"/>
describe('Date Picker Test Cypress', () => {

    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Datepicker/index.html")
    });

    it('Select date from the datepicker', () => {

        // let date = new Date();
        // date.setDate(date.getDate()) // get current day
        // cy.log(date.getDate());


        // let date2 = new Date();
        // date2.setDate(date2.getDate() + 5);
        // cy.log(date2.getDate());

        var date = new Date();
        date.setDate(date.getDate() + 67);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log('Future Year to Select: ' + futureYear);
        cy.log('Future Month to Select: ' + futureMonth);
        cy.log('Future Day to Select ' + futureDay);

        cy.get('#datepicker').click();


        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
});