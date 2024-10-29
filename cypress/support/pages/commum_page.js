/// <reference types="cypress" />

const acessRegister = {
  linkUrl: "/",
  register: ".fa-lock",
  login: ".fa-user",
};

export default {
  acessRegisterPage() {
    //acessando home
    cy.visit(acessRegister.linkUrl).get("#top_header");

    //clicando em cadastro
    cy.get(acessRegister.register).click();
  },
  acessLoginPage() {
    //acessando home
    cy.visit(acessRegister.linkUrl).get("#top_header");

    //clicando em Login
    cy.get(acessRegister.login).click();
  },
};
