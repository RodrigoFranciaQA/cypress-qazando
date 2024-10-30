/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import commum_page from "../support/pages/commum_page";
import cadastro_page from "../support/pages/cadastro_usuario_page";

describe("Cadastro de usuário", () => {
  beforeEach("Acessando home", () => {
    commum_page.acessRegisterPage();
  });

  it("Campo Nome vazio", () => {
    cadastro_page.clicarCadastrar();
    cadastro_page.validarMensagemErro("O campo nome deve ser prenchido");
  });

  it("Campo E-mail vazio", () => {
    cadastro_page.escreverCampoNome("Rodrigo");
    cadastro_page.clicarCadastrar();
    cadastro_page.validarMensagemErro(
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Campo E-mail invalido", () => {
    cadastro_page.escreverCampoNome("Rodrigo");
    cadastro_page.escreverCampoEmail("emailInavalido");
    cadastro_page.clicarCadastrar();
    cadastro_page.validarMensagemErro(
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Campo senha vazio", () => {
    cadastro_page.escreverCampoNome("Rodrigo");
    cadastro_page.escreverCampoEmail("rodrigo@gmail.com");
    cadastro_page.clicarCadastrar();
    cadastro_page.validarMensagemErro(
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  });

  it("Campo senha Invalida!", () => {
    cadastro_page.escreverCampoNome("Rodrigo");
    cadastro_page.escreverCampoEmail("rodrigo@gmail.com");
    cadastro_page.escreverCampoPassword("1234");
    cadastro_page.clicarCadastrar();
    cadastro_page.validarMensagemErro(
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  });

  // deixei ASSINCRONO para o faker gerar o nome, para depois continuar a função (async)
  // continua apenas apos armazenar um nome fake na variavel (await)
  it("Cadastro com sucesso", async () => {
    const nomefake = await faker.person.fullName();

    cadastro_page.escreverCampoNome(nomefake);
    cadastro_page.escreverCampoEmail("rodrigo@gmail.com");
    cadastro_page.escreverCampoPassword("123456");
    cadastro_page.clicarCadastrar();
    cadastro_page.validarMensagemSucesso1("Cadastro realizado!");
    cadastro_page.validarMensagemSucesso2(nomefake);
  });
});
