import loginPage from "../support/pages/loginPage"
import users from "../fixtures/login-user.json"
import profilePage from "../support/pages/profilePage"

describe('Profile Selection', () => {

  it('Create a new profile', () => {
    const user = users.success

    loginPage.toDoLogin(user)
    profilePage.deleteProfile('Test Automation')
    profilePage.createProfile('Test Automation')
  })

  it('Select a new profile', () => {
    const user = users.success

    loginPage.toDoLogin(user)
    profilePage.selectNewProfile('Test Automation')
  })

})