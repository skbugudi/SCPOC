import { exception } from './exceptionPage';
export class NavigationPage{

    historyPage(){
        cy.get('#navigation_hamburger_link').then((menu)=>{
            cy.wrap(menu).click({ force: true })
            cy.contains('Contributions').click()
            exception.deleteItem()

        })
    }
        // cy.contains("History").click({ force: true })
    //  exception.popOver('#confirm-modal-ok')
    // })
    

}

export const onNavigationPage = new NavigationPage();