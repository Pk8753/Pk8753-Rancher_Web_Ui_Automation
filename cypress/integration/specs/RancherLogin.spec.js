import RancherLoginPage from "../PageObjects/RancherLogin.page";
import RancherLandingPage from "../PageObjects/RancherLanding.page";


let rancherLoginPage = new RancherLoginPage()
let rancherLandingPage = new RancherLandingPage()


describe('Rancher UI Test', () => {
  beforeEach(() => {
    cy.visit('https://127.0.0.1/')
  })

  it('should login into Rancher web page and validate', () => {
    rancherLoginPage.validate()
    rancherLoginPage.enterPasswordToLogin(Cypress.env('user'),Cypress.env('passwd'))

    rancherLandingPage.validateMainPage()
    rancherLandingPage.validateMainPageTitle()
  })


})