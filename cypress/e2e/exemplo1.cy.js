///  <reference types ="cypress"/>

describe ("Criando um cenário de teste ao site Globalsqa", () => {
  it.skip('Caso de teste: Registrando um usuário no site com sucesso', ()=> {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Inatel')
    cy.get('#Text1').type('Inatel')
    cy.get('#username').type('Inatel')
    cy.get('#password').type('Inatel')
    cy.get('.btn-primary').click()
    // contain -> Multicontido
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it.skip('Caso de teste: Registrando um usuário no site com falha(faltando senha)', ()=> {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Inatel')
    cy.get('#Text1').type('Inatel')
    cy.get('#username').type('Inatel')
    cy.get('#password').type('Inatel')
    cy.get('#password').clear()
    // have -> Monocontido
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    // disabled -> desabilitado
    cy.get('.btn-primary').should('be.disabled')
    cy.get('h1.ng-binding').should('contain.text', info[0])
    
  })

  it('Realizando login com sucesso', ()=> {

    let info = CriarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
  })
})

function CriarUsuario()
{
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas + minutos + segundos + 'Id'
  let senha = horas + minutos + segundos + 'Senha'
  let userInfo = [user,senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  // contain -> Multicontido
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}