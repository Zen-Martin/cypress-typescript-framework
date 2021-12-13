/// <reference types = "cypress"/>

class Page {

    public goTo(url:string):void{
        cy.visit(url);
    }

    public fillField(element:string,value:string):void{
        cy.get(element)
        .clear()
        .type(value);
    }

    public clickOn(element:string):void{
        cy.get(element)
        .should('be.visible')
        .click({force: true});
    }

    public expectTitle(value:string):void{
        cy.title()
        .should('eq', value);
    }

    public expectValue(element:string, value:string):void{
        cy.get(element)
        .should('have.value',value);
    }

    public expectText(element:string, value:string):void{
        cy.get(element)
        .should('have.text',value);
    }

    public selectOption(dropList:string, option:string):void{
        cy.get(dropList)
        .select(option,{force: true});
    }

    public scrollToElement(element:string):void{
            cy.get(element)
            .scrollIntoView({easing: 'linear'})
            .should('be.visible');
    }

    public pageContent(element:string){
        cy.get(element)
        .should('not.have.text','page is no longer available');
    }

}

export default Page;