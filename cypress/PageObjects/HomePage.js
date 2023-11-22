import { homePage } from "../support/Locators/homePage";

class HomePage{


logoclick()
{
const logolink=cy.get(homePage.logo);
logolink.click();
}

login()
{
const loginlink=cy.get(homePage.loginTab)
loginlink.click();
cy.wait(500)
cy.get(homePage.loginUserIdField).type('harichandra')
cy.wait(500)
cy.get(homePage.loginPassField).type('pass')
cy.wait(500)
cy.get(homePage.loginButton).click()

cy.get(homePage.profileName).should('have.text','Welcome harichandra')
cy.log('Login Successful')
cy.wait(1000)
}


clickHomeTab()
{
    const homeTab=cy.get(homePage.homeTab);
    homeTab.click()
    cy.wait(1000)
}
clickContactTab()
{
    const contactTab=cy.get(homePage.contactTab);
    contactTab.click()
    cy.wait(1000)
}
clickAboutTab()
{
    const aboutTab=cy.get(homePage.aboutTab);
    aboutTab.click()
    cy.wait(1000)
}
clickCartTab()
{
   // const cartTab=
    cy.get(homePage.cartTab).click()
    cy.wait(5000)

   // cartTab.click()
}

clickPhones()
{
    const phones=cy.get(homePage.phones);
    phones.first().click();
    cy.wait(2000)
}
clickLaptops()
{
    const laptops=cy.contains(homePage.laptops);
    laptops.click();
    cy.wait(2000)
}
clickMonitors()
{
    const monitors=cy.contains(homePage.monitors);
    monitors.click();
    cy.wait(2000)
}

clickPreviousButton()
{
    const preButton=cy.get(homePage.previousButton)
    preButton.click()
    cy.wait(2000)
}
clickNextButton()
{
    const nextButton=cy.get(homePage.nextButton)

    nextButton.click()
    cy.wait(2000)
}

selectProduct(productName)
{
    cy.wait(2000)
cy.get(homePage.productsNames).each(($e, index, $list) => {

  if($e.text().includes(productName))
  {
    cy.contains(productName).click()  
  }
  cy.wait(1000)
  
})
}

clickAddToCart()
{
    cy.wait(1000)
   const addToCart= cy.contains(homePage.addToCartButton)
   addToCart.click()
   cy.wait(1000)
   cy.on('window:alert', (alertText) =>{
    expect(alertText).to.equal('Product added.') 
  })
  
}

}

export default HomePage;