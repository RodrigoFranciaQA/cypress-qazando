/// <reference types="cypress" />

const errormensage = "#errorMessageFirstName";
// const dados_usuario = {
//   name: "Rodrigo",
//   email: "rodrigo@gmail.com",
//   senhaValida: "1234567",
//   senhaInavlida: "1234",
// };

export default {
  clicarCadastrar() {
    cy.get("#btnRegister").click();
  },

  validarMensagemErro(mesage) {
    cy.get(errormensage).should("be.visible").should("contain", mesage);
  },

  validarMensagemSucesso1(mesage) {
    cy.get("#swal2-title").should("be.visible").should("contain", mesage);
  },
  validarMensagemSucesso2(name) {
    cy.get("#swal2-html-container")
      .should("be.visible")
      .should("contain", `Bem-vindo ${name}`);
  },

  escreverCampoNome(name) {
    cy.get("#user").should("be.visible").type(name);
  },

  escreverCampoEmail(email) {
    cy.get("#email").should("be.visible").type(email);
  },

  escreverCampoPassword(password) {
    cy.get("#password").should("be.visible").type(password);
  },
};
