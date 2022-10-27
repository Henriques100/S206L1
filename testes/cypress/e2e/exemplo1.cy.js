/// <reference> types="cypress"/>

describe('Criando cenário de teste ao site globalsqa',()=> {

  it('Caso de teste: Registrando um usuário no site com sucesso', ()=> {
    
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
  })
})