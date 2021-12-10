import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage"

const homePage: HomePage = new HomePage();

Given("I am on the homePage", () => {
    homePage.goToHomepage();
});

When("Scroll down, click on the *filières responsables*", () => {
    homePage.clickOnAffiate();
});

When("Click on *voir tous les produits*", () => {
    homePage.clickOnAllProductView();
});

Then("A page displaying a message that the page is no longer available", () => {
    homePage.verifyRedirection();
});
