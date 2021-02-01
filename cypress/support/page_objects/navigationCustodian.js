export class NavigationCustodian{
    openCustodian(custodian){
        cy.visit("/"+custodian);
    }

    loginToCustodian(username,password){
    cy.get("#sc_username").type(username);
    cy.get("#j_password").type(password);
    cy.get("form").submit();
    }

    uploadContributions(filepath){
    cy.contains("Upload a new file").click({ force: true });
    cy.get("#schedule_upload_file").attachFile(filepath);
    cy.get("#paycycle-next-button").click();
    }
}

export const openCustodian = new NavigationCustodian();