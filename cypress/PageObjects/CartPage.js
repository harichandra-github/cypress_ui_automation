import { cartPage } from "../support/Locators/cartPage"

class CartPage{

    ClickPlaceOrder()
    {
        cy.get(cartPage.placeOrderButton).click()

    }

    fillDetails(customerName, country,city,cardNumber,expMonth,expYear)
    {

    
        cy.get(cartPage.customerName).type(customerName)
        cy.wait(500)
        cy.get(cartPage.Country).type(country)
        cy.wait(500)
        cy.get(cartPage.city).type(city)
        cy.wait(500)
        cy.get(cartPage.card).type(cardNumber)
        cy.wait(500)
        cy.get(cartPage.expMonth).type(expMonth)
        cy.wait(500)
        cy.get(cartPage.expYear).type(expYear)
        cy.wait(500)
        cy.contains(cartPage.purchaseButton).click()
        cy.wait(500)
        cy.get(cartPage.purchaseAlert).should('have.text','Thank you for your purchase!')

    }
    validateTotal()
    {
        var sum=0
        //geting each amaout and adding
     cy.get(cartPage.productAmount).each(($el,index,$list) =>{

      cy.log($el.text())
      var amount=$el.text()

      sum=Number(sum)+Number(amount)
      cy.log(sum)

     })
     cy.get(cartPage.totalAmount).then(function(element){

      var total=element.text()
      cy.log(total)

      expect(Number(total)).to.equal(Number(sum))

     })
    }



    
}
export default CartPage;