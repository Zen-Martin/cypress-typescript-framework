/// <reference types = "cypress"/>
import Page from "./Page";
const config = require("../../resources/config.json");

class HomePage extends Page{

private cookieOption:string = "#onetrust-reject-all-handler";

private affiliate:string = "footer:nth-child(2) > div > div > div > p:nth-child(5) > a:nth-child(1)";

private seeAllProduct:string = ".flex-wrapper > #wrapper > #cms-slot-contentSlot > .filieres--edito > .btn";

public goToHomepage():void{
    this.goTo(config.env_URL);
    this.clickOn(this.cookieOption);
    //this.clickOn(this.visitOption);
}

public clickOnAffiate():void{
    this.scrollToElement(this.affiliate);
    this.clickOn(this.affiliate);
}

public clickOnAllProductView():void{
    this.clickOn(this.seeAllProduct);
}

public verifyRedirection():void{
    this.pageContent("body");
}


}

export default HomePage;