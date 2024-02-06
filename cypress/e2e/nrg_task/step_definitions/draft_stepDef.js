import { When } from '@badeball/cypress-cucumber-preprocessor';
// import DraftPage from '../pages/draft_page';
// import * as testData from '../../../fixtures/test_data.json';

When('draft', () => {
  cy.visit('/way2auto_jquery/index.php');
  // DraftPage.elements.draft().type(testData.draft);
});
