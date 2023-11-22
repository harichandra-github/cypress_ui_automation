///<reference types="cypress" />

import CartPage from "../../PageObjects/CartPage";
import HomePage from "../../PageObjects/HomePage"
import { ajeet } from "../../support/Customers/customers";
import { products } from "../../support/products";
import { url } from "../../support/Url";

describe('Test Suit 3', () => {

  const hp = new HomePage();
  const ct = new CartPage();
  
  
  

  before(function () {
    cy.visit(url.QAUrl)
  
    hp.login()
    
    })

  it('Testing End to End by Ordering Monitors', () => {
    hp.clickMonitors()
    cy.selectProduct(products.monitor_1)
    hp.clickAddToCart()
    hp.clickHomeTab()
    hp.clickMonitors()
    cy.selectProduct(products.monitor_2)
    hp.clickAddToCart()
    hp.clickCartTab()
    ct.validateTotal()
    ct.ClickPlaceOrder()
    ct.fillDetails(ajeet.name,ajeet.country,ajeet.city,ajeet.cardNumber,ajeet.expMonth,ajeet.expYear)

  })




})