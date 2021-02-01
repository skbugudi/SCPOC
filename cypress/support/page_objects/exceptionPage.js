export class ExceptionPage{
    selectFund(fundName){
    cy.get('.widget-title.smaller').click();
    cy.get('#exceptionSelection').click();
    cy.get('.singlelist__filter').then((dropdown)=>{
      cy.wrap(dropdown).type(fundName)
    
    cy.get('.clearfix.singlelist__scroller li').each((item)=>{
        const txt = item.text()
        cy.log(txt)
        if(txt.search(fundName)){
          cy.wrap(item).click()
        }
    })
    })

    }

    popOver(onLocator){
        cy.get(onLocator).then((popup)=>{
            cy.wrap(popup).click()
            cy.contains('Confirm').click()
            cy.get('#next').click()
      
          })
    }
    deleteItem(){ 
        cy.get('[role="row"]').eq(1).find('.fa-trash').click({ force: true })
        // .siblings().each((row)=>{ cy.wrap(row).find('.fa-trash').click({ force: true }
         cy.get('.modal-dialog').find('#confirm-modal-ok').click()
        
        }
}
export const exception = new ExceptionPage();