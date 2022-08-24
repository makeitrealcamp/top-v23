/// <reference types="Cypress" />

describe('my first e2e test', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.viewport(1280, 720);
  })

  it('successfully renders the page', () => {
    cy.contains('Emoji Search');
  })

  it('renders the list of emojis', () => {
    cy.get("[data-cy='emoji-row']").should('have.length', 20);
  })

  it('allows user to search for an emoji', () => {
    cy.get(`[data-cy='emoji-search-input']`).type('joy');
    cy.get(`[data-cy='emoji-row']`).should('have.length', 3);
    cy.contains('Joy');
    cy.contains('Joy Cat');
    cy.contains('Joystick');

    cy.get(`[data-cy='emoji-search-input']`).clear().type('cactus');
    cy.get(`[data-cy='emoji-row']`).should('have.length', 1);
    cy.contains('Cactus');
  })

  it.skip('is a very long test', () => {
    cy.wait(10000);
  })

  it('shows a "emoji not found" message', () => {
    cy.get(`[data-cy='emoji-search-input']`).type('emoji that does not exist');
    cy.get(`[data-cy='emoji-row']`).should('have.length', 0);
    cy.contains('Emojis not found');
    cy.contains('Try searching for somenthing else');
  })
})
