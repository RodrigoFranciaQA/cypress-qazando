/// <reference types="cypress" />
import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";

describe("Login", () => {
  beforeEach("Acessando home", () => {
    commum_page.acessLoginPage();
  });

  it("Campo e-mail vazio", () => {
    login_page.clicarLogin();
    login_page.validarMensageErro("E-mail inválido.");
  });

  it("Campo e-mail invalido", () => {
    login_page.escreverCampoEmail("emailInvalido");
    login_page.clicarLogin();
    login_page.validarMensageErro("E-mail inválido.");
  });

  it("Campo senha vazio", () => {
    login_page.escreverCampoEmail("rodrigo@gmail.com");
    login_page.clicarLogin();
    login_page.validarMensageErro("Senha inválida.");
  });

  it("Campo senha invalida", () => {
    login_page.escreverCampoEmail("rodrigo@gmail.com");
    login_page.escreverCampoSenha("1234");
    login_page.clicarLogin();
    login_page.validarMensageErro("Senha inválida.");
  });

  it("Login com sucesso", () => {
    login_page.escreverCampoEmail("rodrigo@gmail.com");
    login_page.escreverCampoSenha("12345678");
    login_page.clicarLogin();
    login_page.validarMensageSucesso("Login realizado", "rodrigo@gmail.com");
  });
});
