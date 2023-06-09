/// <reference types="cypress" />

import { validModalEnter_02 } from "./02_validModalEntrada";
import { elemDevFinance } from "../pageObjects/devFinance";

export function validarCadNovaEnt_03() {
  validModalEnter_02()
  let pO = elemDevFinance()

  cy.xpath(pO.xDesc).click().type("Freela");
  cy.xpath(pO.xValorEnt).type(1910);
  cy.xpath(pO.xDatas).type("1910-09-01"); //Aqui tem que seguir a regra yyyy-mm-dd
  cy.xpath(pO.xBtnSave).should('have.text', pO.xTextBtnSave)
    .click()
    .waitUntil(() => cy.xpath(pO.xTabela))

    .reload()

  validModalEnter_02()
  let pO2 = elemDevFinance()

  cy.get(pO2.iDesc).click().type("Freela");
  cy.get(pO2.iValorEnt).type(777);
  cy.get(pO2.iDatas).type("2012-06-04"); //Aqui tem que seguir a regra yyyy-mm-dd
  cy.contains(pO2.xTextBtnSave)
    .click()
    .waitUntil(() => cy.get(pO.iTabela))
}

/*
Outra forma de realizar a função
export function validarCadExit_04(desc, valor) {
  validModalEnter_02()
  let pO = elemDevFinance()
    cy.xpath(pO.xDesc).click().type(desc);
    cy.xpath(pO.xValorEnt).type(valor);
    cy.xpath(pO.xDatas).type("2023-03-20"); //Aqui tem que seguir a regra yyyy-mm-dd
    cy.xpath(pO.xBtnSave).should('have.text', pO.xTextBtnSave)
      .click()
      .waitUntil(() => cy.xpath(pO.xTabela))

      no código iria inserir
    validarCadExit_04("Freela", 30)
*/