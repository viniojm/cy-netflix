

class ProfilePage {

    deleteProfile(profile){
        cy.get('a[href="/ManageProfiles"]').click()
        cy.contains('span.profile-name', profile).click();
        cy.contains('button', 'Excluir perfil').click();
        cy.get('span[data-uia="profile-delete-button"]').click()
        cy.contains('a', 'Concluído').click();
    }

    createProfile(profile){
        cy.get('div[class*=addProfileIcon]').click()
        cy.get('input[name="name"]').type(profile)
        cy.contains('button', 'Salvar').click();
    }

    selectNewProfile(profile){
        cy.contains('a.profile-link', profile).click();
        cy.contains('button', 'Próximo').click();    
        cy.get('div[data-uia="action_select_title_0_0"]').click()
        cy.get('div[data-uia="action_select_title_0_1"]').click()
        cy.get('div[data-uia="action_select_title_0_2"]').click()
        cy.contains('button', 'Concluído').click();
        cy.get('div[data-uia="new-user-tutorial"]').should('be.visible')
    }
}

export default new ProfilePage()