/// <reference types="cypress" />
import { openCustodian } from '../../support/page_objects/navigationCustodian';
import { util } from '../../support/Utilities/generalUtilities';
import { exception } from '../../support/page_objects/exceptionPage';
import { onNavigationPage } from '../../support/page_objects/navigationPage';


describe("Suite Login test", () => {
  const filepath = "CSV/ato-all-smsf.csv";
  const filepath1 = "JSON/Gridresponse.json";
  beforeEach('Navigae to home page before each test ', ()=>{
    cy.openHomePage()
  })
  it.only("Login form", () => {
    openCustodian.openCustodian("/mcsone")
    openCustodian.loginToCustodian("MCSONEUserOne","&qsltd")
    openCustodian.uploadContributions(filepath)
    util.waitForElement('.widget-title.smaller')
    exception.selectFund('TRANSPORT')
    exception.popOver('#apply-state')
    cy.intercept('POST','/grid-view-contr/datatable/paged/byDataFileId/*').as('todos')

    // cy.intercept('POST', '**/paged/*', {fixture:'JSON/Gridresponse.json'})
    cy.get('.modal-dialog').find('#confirm-modal-cancel').click()
    cy.wait(3000)
    // cy.intercept('POST', '**/paged/**', (req) => {
    //   // https://portal-prtlshared2.devint.superchoice.com.au/grid-view-contr/datatable/paged/byDataFileId/744389?v=1611896275807
    //   if (req.url.search('?v=')) {
    //     req.alias = "load5"
    //   }
    // })
  
    // // cy.get('#load-users').click()
    // // cy.get('#load-five-users').click()
    // cy.wait('@load5') // the second request created this alias dynamically
    //   .its('response.body').should('not.be', null)

    cy.wait('@todos')
    .its('response')
    .and('have.property', 'body') // yields the "response.body"
    .then(body => {
      // since we do not know the number of items
      // just check if it is an array
    //  cy.log(body)
      // expect(body).deep.equal()
      // cy.readFile('JSON/Gridresponse.json').should('deep.include', body)
      
      // expect( body )
      // .to.containSubset(cy.readFile('JSON/Gridresponse.json','utf8'));
      console.log()
     // expect('JSON/Gridresponse.json').to.be.a.jsonFile().and.to.be.jsonObj(body);

    })
 
     onNavigationPage.historyPage()
  })
  it('Test one', ()=>{

    cy.log("Happy Test one");
  })

  it('Test two', ()=>{

    cy.log("Happy Test two");
  })
});
