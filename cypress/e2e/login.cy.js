import loginPage from "../support/pages/loginPage"
import users from "../fixtures/login-user.json"

describe('Login', () => {

    it('Must log in successfully', () => {
        const user = users.success

        loginPage.go()
        loginPage.form(user)
        loginPage.submit()

        loginPage.profileWatch('Quem está assistindo?')
    })

    it('Should not log in with incorrect password', () => {
        const user = users.wrong_pass

        loginPage.go()
        loginPage.form(user)
        loginPage.submit()
        loginPage.alertMessage('Senha incorreta para')
    })

    it('Should not log in with invalid password', () => {
        const user = users.invalid_password

        loginPage.go()
        loginPage.form(user)
        loginPage.submit()
        loginPage.alertMessagePassword('A senha deve ter entre 4 e 60 caracteres.')
    })

    it('Should not log in with an invalid email ', () => {
        const user = users.invalid_email

        loginPage.go()
        loginPage.form(user)
        loginPage.submit()
        loginPage.alertMessageEmail('Informe um email válido.')
    })

    it('Email and password must be mandatory', () => {
        loginPage.go()

        loginPage.submit()
        loginPage.alertMessageEmail('Informe um email ou número de telefone válido.')
        loginPage.alertMessagePassword('A senha deve ter entre 4 e 60 caracteres.')
    })

    it('Validate the forgot password button', () => {
        loginPage.go()

        loginPage.forgotPasswordBtn()
    })
})