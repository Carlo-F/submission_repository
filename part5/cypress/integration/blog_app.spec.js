/* eslint-disable no-undef */
describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')

    const user = {
      username: 'joker',
      name: 'joker',
      password: 'joker'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function () {
    cy.contains('Log in to application')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').clear().type('joker')
      cy.get('#password').clear().type('joker')
      cy.get('#login-button').click()

      cy.contains('joker logged in')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').clear().type('joker')
      cy.get('#password').clear().type('wrongpassword')
      cy.get('#login-button').click()

      cy.contains('Log in to application')
    })
  })
})