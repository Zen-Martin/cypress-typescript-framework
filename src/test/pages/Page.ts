/// <reference types = "cypress"/>

class Page {

    public goTo(url:string):void{
        cy.visit(url);
    }

    public clickOn(element:string):void{
        cy.get(element)
        .should("be.visible")
        .click({force: true});
    }

    public expectTitle(value:string):void{
        cy.title()
        .should('eq', value);
    }

}

export default Page;