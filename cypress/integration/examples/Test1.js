import CartPage from "../../PageObjects/CartPage";
import HomePage from "../../PageObjects/HomePage"
import { ranjit } from "../../support/Customers/customers";
import { products } from "../../support/products";
import { url } from "../../support/Url";

describe('Test Suit 1', () => {

  const hp = new HomePage();
  const ct = new CartPage();
  
  
  

  before(function () {
    cy.clearCookies()
    
    cy.visit(url.QAUrl)//Hitting the url
    hp.login()//Login to the application
    
    })

  it('Testing End to End by Ordering Phones', () => {



    
    hp.clickPhones()//Clicking on the phones category 
    cy.selectProduct(products.mobile_1)//selecting first mobile
    hp.clickAddToCart()//Clicking on the add to cart button
    hp.clickHomeTab()//navigate back to home 
    cy.selectProduct(products.mobile_2)//selecting second mobile
    hp.clickAddToCart()//Clicking on the add to cart button
    hp.clickCartTab()// clicking on the cart
    ct.validateTotal()//validating the total
    ct.ClickPlaceOrder()// Clicking on the place order button
   // ct.fillDetails('Ranjit Singh','India','Zirakpur','112','11','23')
   ct.fillDetails(ranjit.name,ranjit.country,ranjit.city,ranjit.cardNumber,ranjit.expMonth,ranjit.expYear)// filling the customer details
  
  
  })




})


