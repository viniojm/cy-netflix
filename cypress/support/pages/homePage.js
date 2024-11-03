class HomePage {

    go() {
        cy.visit('/')
        cy.get('button[class*=onetrust-close-btn-ui]').click()
    }

    verifyTitle(text) {
        cy.get('h1').should('be.visible').should('have.text', text)
    }

    changeLanguage(language) {
        cy.get('select[data-uia="language-picker-header"]').select(language)
    }

    contactUsPage(text) {
        cy.get('a[href="https://help.netflix.com/contactus"]').should('have.text', 'Entre em contato').click()
        cy.get('h3[class="contactus-input-label"]').should('be.visible').should('have.text', text)
    }
}

export default new HomePage()