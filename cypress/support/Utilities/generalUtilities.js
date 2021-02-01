export class GeneralUtilities {
    waitForElement(locator){
        cy.waitFor('.widget-title.smaller', {
            timeout: 200, // The time in ms to poll for changes
            tries: 300,   // How many times to try before failing
                          // 300 tries at 200ms timeout = 1min
          });
    }

}

export const util = new GeneralUtilities();