class RancherLoginPage{
    welcomeMessage = () => '.login-welcome'
    userNameInputField = () => '[data-testid="local-login-username"]'
    passwordInputField = () => '[data-testid="local-login-password"] > .labeled-input > input'
    submitButton = () => '[data-testid="login-submit"] > span'


    validate (){
        
        cy.get(this.userNameInputField()).should('be.visible')
        cy.get(this.passwordInputField()).should('be.visible')
        cy.get(this.submitButton()).should('be.visible')


    }

    enterPasswordToLogin(USERNAME, PASSWORD){
        cy.get(this.userNameInputField()).type(USERNAME,{log:false})
        cy.get(this.passwordInputField()).type(PASSWORD,{log:false})
        cy.get(this.submitButton()).click()
    }

}
export default RancherLoginPage