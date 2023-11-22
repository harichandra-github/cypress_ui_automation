import { contactpage } from "../support/Locators/contactpage";

class ContactPage{

    fillEmail(email)
    {
        cy.get(contactpage.email).type(email)
    }
    fillName(name)
    {
        cy.get(contactpage.name).type(name)
    }
    fillMessage(msg)
    {
        cy.get(contactpage.message).type(msg)
    }
    clickSendButton()
    {
        cy.contains(contactpage.sendMessageButton).click()
        cy.on('window:alert', (alert) =>{
            expect(alert).to.equal('Thanks for the message!!') })
    }
}
export default ContactPage;