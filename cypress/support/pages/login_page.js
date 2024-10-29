/// <reference types="cypress" />

const mensageDeErro = ".invalid_input";

export default {
  clicarLogin() {
    cy.get("#btnLogin").click();
  },
  validarMensageErro(mensage) {
    cy.get(mensageDeErro).should("be.visible").should("contain", mensage);
  },
  escreverCampoEmail(email) {
    cy.get("#user").should("be.visible").type(email);
  },
  escreverCampoSenha(senha) {
    cy.get("#password").should("be.visible").type(senha);
  },
  validarMensageSucesso(mensage, email) {
    cy.get("#swal2-title").should("be.visible").should("contain", mensage);
    cy.get("#swal2-html-container")
      .should("be.visible")
      .should("contain", email);
  },
};
