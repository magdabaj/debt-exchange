// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import { SetupWorkerApi } from "msw";
import Bluebird from "cypress/types/bluebird";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { mount } from "cypress/react18";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
            startMswServer: (server: SetupWorkerApi) => Bluebird<unknown>;
        }
    }
}

Cypress.Commands.add("mount", mount);

Cypress.Commands.add("startMswServer", (server: SetupWorkerApi) => {
    return new Cypress.Promise((resolve, reject) => {
        server
            .start({
                serviceWorker: {
                    url: "/mockServiceWorker.js"
                }
            })
            .then(function(_) {
                resolve();
            })
            .catch(function(err: unknown) {
                reject(err);
            });
    });
});

// Example use:
// cy.mount(<MyComponent />)