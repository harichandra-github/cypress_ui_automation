///<reference types="cypress" />

import CartPage from "../../PageObjects/CartPage";
import ContactPage from "../../PageObjects/ContactPage";
import HomePage from "../../PageObjects/HomePage"
import { contactpage } from "../../support/Locators/contactpage";
import { url } from "../../support/Url";

describe('Test Suit 4', () => {

  const hp = new HomePage();
  const ct = new CartPage();
  const cp=new  ContactPage
  
  

  before(function () {
    cy.visit(url.QAUrl)
  
   // hp.login()
    
    })

  it('Testing Contact us functionality', () => {
    
    cy.fixture('pallavi').then(function(pallavi){
        hp.clickContactTab()
        cp.fillEmail(pallavi.email)
        cp.fillName(pallavi.name)
        cp.fillMessage(pallavi.message)
        cy.wait(1000)
        cp.clickSendButton()

    })
    

  })




})