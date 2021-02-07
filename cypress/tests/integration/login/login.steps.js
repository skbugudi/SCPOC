import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { onNavigationPage } from '../../../support/page_objects/navigationPage';
import { exception } from '../../../support/page_objects/exceptionPage';
import { openCustodian } from '../../../support/page_objects/navigationCustodian';
import { util } from '../../../support/Utilities/generalUtilities';


Given('I am in login page and login with {string} and {string} and {string} to the application',(custodian,username,password)=>{
    // cy.openHomePage(custodian,username,password);
    cy.apiLogin(custodian,username,password);
    // cy.openHomePage("mcsone","MCSONEUserOne","&qsltd");
});
When('I upload contributions with {string}',(file)=>{
    openCustodian.uploadContributions(file)
    util.waitForElement('.widget-title.smaller')
});
Then('I resolve the exceptions with {string}', (fund)=>{
    exception.selectFund(fund)
    exception.popOver('#apply-state')
    cy.get('.modal-dialog').find('#confirm-modal-cancel').click()
    cy.wait(2000)
});

Then('I navigate to Grid and verify',()=>{
    onNavigationPage.historyPage()
});

