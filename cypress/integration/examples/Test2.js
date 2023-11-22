///<reference types="cypress" />

import CartPage from "../../PageObjects/CartPage";
import HomePage from "../../PageObjects/HomePage"
import { bharti } from "../../support/Customers/customers";
import { products } from "../../support/products";
import { url } from "../../support/Url";

describe('Test Suit 2', () => {

  const hp = new HomePage();
  const ct = new CartPage();
  
  
  

  before(function () {
    cy.visit(url.QAUrl)
    hp.login()
    })

  it('Testing End to End by Ordering Laptops', () => {

    
    hp.clickLaptops()
    cy.selectProduct(products.laptop_1)//Selecting first laptop
    hp.clickAddToCart()
    hp.clickHomeTab()
    hp.clickLaptops()
    cy.selectProduct(products.laptop_2)//Selecting second laptop
    hp.clickAddToCart()
    hp.clickCartTab()
    ct.validateTotal()
    ct.ClickPlaceOrder()
    ct.fillDetails(bharti.name,bharti.country,bharti.city,bharti.cardNumber,bharti.expMonth,bharti.expYear)
  })




})


