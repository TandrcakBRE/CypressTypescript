/// <reference types="cypress" />

class FirstPageSite1 {
  radioButton1() {
    return cy.get('input[value="radio1"]');
  }
  radioButton2() {
    return cy.get('input[value="radio2"]');
  }
  radioButton3() {
    return cy.get('input[value="radio3"]');
  }
  autocompleteField() {
    return cy.get('#autocomplete');
  }
  autocompleteDdl() {
    return cy.get('.ui-menu-item div');
  }
  allCheckboxes() {
    return cy.get('.right-align label input');
  }
  checkBoxOption1() {
    return cy.get('#checkBoxOption1');
  }
  staticDdl() {
    return cy.get('select[name="dropdown-class-example"]');
  }
  hideButton() {
    return cy.get('#hide-textbox');
  }
  showButton() {
    return cy.get('#show-textbox');
  }
  textBoxField() {
    return cy.get('#displayed-text');
  }
  alertButton() {
    return cy.get('#alertbtn');
  }
  confirmButton() {
    return cy.get('[value="Confirm"]');
  }
  tebleColumn2() {
    return cy.get('tr td:nth-child(2)');
  }
  mouseHoverTop() {
    return cy.get('a[href="#top"]');
  }
}
export default FirstPageSite1;
