

class LoginPage {

    go() {
        cy.visit('/login')
        cy.get('button[class*=onetrust-close-btn-ui]').click()
    }

    form(user) {
        cy.get('input[data-uia="login-field"]').type(user.email)
        cy.get('input[data-uia="password-field"]').type(user.password)
    }

    submit() {
        cy.get('button[data-uia="login-submit-button"]').click()
    }

    profileWatch(text) {
        cy.get('h1[class="profile-gate-label"]').should('be.visible').should('have.text', text)
    }

    alertMessage(text) {
        cy.get('div[data-uia="error-message-container+header"]').should('be.visible').should('contain', text)
    }

    alertMessageEmail(text) {
        cy.get('div[data-uia="login-field+validationMessage"]').should('be.visible').should('contain', text)
    }

    alertMessagePassword(text) {
        cy.get('div[data-uia="password-field+validationMessage"]').should('be.visible').should('contain', text)
    }

    forgotPasswordBtn() {
        cy.get('a[href="/LoginHelp"]').should('be.visible').should('have.text', 'Esqueceu a senha?').click()
        cy.get('p[data-uia="password-reset-subheader"]').should('be.visible').should('have.text', 'Como você prefere redefinir sua senha?')
    }

    toDoLogin(user){
        cy.visit('/login')
        cy.get('button[class*=onetrust-close-btn-ui]').click()
        cy.get('input[data-uia="login-field"]').type(user.email)
        cy.get('input[data-uia="password-field"]').type(user.password)
        cy.get('button[data-uia="login-submit-button"]').click()
    }
}

export default new LoginPage()