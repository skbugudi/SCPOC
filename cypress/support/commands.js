// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import 'cypress-waitfor';
import { openCustodian } from './page_objects/navigationCustodian';
import '@testing-library/cypress/add-commands';



Cypress.on('window:before:load', (win) => {
    Object.defineProperty(win, 'self', {
      get: () => {
        return window.top
      }
    })
  })

Cypress.Commands.add('openHomePage', (custodian, username, password)=>{
    cy.visit('/')
    openCustodian.openCustodian(custodian)
    openCustodian.loginToCustodian(username,password)
});

Cypress.Commands.add('apiLogin',(custodianPipeUsername, sc_username, password)=>{
    cy.request('GET','/openid-connect-server-webapp/login').its('body').then((body)=>{
        const $html = Cypress.$(body)
        const csrfToken = $html.find('input[name=_csrf]').val()

        cy.request({
            method: 'POST',
            url: 'openid-connect-server-webapp/login',
            failOnStatusCode: false, // dont fail so we can make assertions
            form: true, // we are submitting a regular form body
            body: {
            username:custodianPipeUsername+'|'+sc_username,
            sc_username:sc_username,
            password:password,
            _csrf: csrfToken, // insert this as part of form body
            },
          }).then((resp) => {
            expect(resp.status).to.eq(200)
        //   expect(resp.body).to.include('<h2>login.html</h2>')
        })

   });
   cy.request(
       {method:'GET',
       url: '/grid-view-contr/login',
       followRedirect:false
       }).then((res)=>{expect(res.status).to.eq(302)})
   cy.request('GET','/grid-services-contr/login').then((res)=>{expect(res.status).to.eq(200)})
   cy.visit('/EmployerPortal/home/#/home');

});


    