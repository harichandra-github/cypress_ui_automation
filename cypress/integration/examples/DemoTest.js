import CartPage from "../../PageObjects/CartPage";
import HomePage from "../../PageObjects/HomePage"
import { products } from "../../support/products";
import { url } from "../../support/Url";

describe('Demo spec', () => {

  const hp = new HomePage();
  const ct = new CartPage();
  

  before(function () {
    cy.visit(url.QAUrl)
    //hp.login()

 
  })
  



  it('Demo Test', () => {


   


  })




})



