import homePage from '../support/pages/homePage'

describe('Home Page', () => {

  it('Check that the home page is loading correctly', () => {
    homePage.go()
    homePage.verifyTitle('Filmes, séries e muito mais, sem limites')
  })

  it('Change page language', () => {
    homePage.go()
  
    homePage.changeLanguage('English')
    homePage.verifyTitle('Unlimited movies, TV shows, and more')
    homePage.changeLanguage('Português')
    homePage.verifyTitle('Filmes, séries e muito mais, sem limites')
  })

  it('Verify that the "Contact Us" link correctly redirects to the support page', () => {
    homePage.go()
    homePage.contactUsPage('Conte-nos mais para sugerirmos a melhor solução')
  })

  it('Verify Login button', () => {
    homePage.go()
    cy.get('a[data-uia="header-login-link"]').click()
    cy.get('a[data-uia="login-help-link"]').should('be.visible').should('have.text', 'Esqueceu a senha?')
  })

})