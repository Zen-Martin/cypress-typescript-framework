@Web
Feature: Re-Test Cases for Auchan Website without account Access
  Background:
    Given I am on the homePage

  @severity=critical
  @bug_1235
  @TEST_OF-210
  Scenario: Link to a non-existent page
    When Scroll down, click on the *filières responsables*
    And Click on *voir tous les produits*
    Then A message about the page is no longer available
