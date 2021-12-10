/// <reference types = "cypress"/>
import Page from "./Page";
const config = require("../../resources/config.json");

class HomePage extends Page{

private cookieOption:string = "#onetrust-reject-all-handler";

private visitOption:string = ".onboarding__link.link.link--underlined.onboardingNoMore > span";

private affiliate:string = "#cms-slot-footerSlot > footer:nth-child(2) > div > div > div > p:nth-child(4) > a:nth-child(1)";

private seeAllProduct:string = ".flex-wrapper > #wrapper > #cms-slot-contentSlot > .filieres--edito > .btn";

public goToHomepage():void{
    this.goTo(config.env_URL);
    this.clickOn(this.cookieOption);
    this.clickOn(this.visitOption);
}

public clickOnAffiate():void{
    cy.get(this.affiliate)
    .scrollIntoView({easing: "linear"})
    .should("be.visible")
    .click({force: true});
}

public clickOnAllProductView():void{
    this.clickOn(this.seeAllProduct);
}

public verifyRedirection():void{
    this.expectTitle("Mes courses du quotidien pas cher à prix Auchan");
}


}

export default HomePage;