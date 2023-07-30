class RancherLandingPage{
    userProfileImage = () => '.user-image'
    rancherLogoImage = () => '.side-menu-logo-img'
    welcomeBanner = () => '[data-testid="banner-title"]'
    clusterTable = () => '.sortable-table'


    validateMainPage(){
        cy.get(this.userProfileImage()).should('be.visible')
        cy.get(this.rancherLogoImage()).should('be.visible')
        cy.get(this.welcomeBanner()).should('be.visible')
        cy.get(this.clusterTable()).should('be.visible')

    }

    validateMainPageTitle(){
        cy.get(this.welcomeBanner()).invoke('text').then((message)=>{
            expect(message).to.eq('Welcome to Rancher')
        })
    }

}
export default RancherLandingPage