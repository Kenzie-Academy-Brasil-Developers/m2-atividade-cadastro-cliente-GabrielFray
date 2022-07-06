import Api from "./Api.js";

const form = document.querySelector("#form_cadastro");

const registerButton = document.querySelector(".btn-cadastrar");

const objectValues = [...form.elements];

async function registerClient() {
  const objectForm = {
    nome: objectValues[0].value,
    idade: "0",
    cpf: "12345678910",
    data_nasc: objectValues[1].value,
    sexo: objectValues[2].value,
    email: objectValues[4].value,
    endereco: {
      cep: "12345678",
      rua: objectValues[5].value,
      numero: objectValues[6].value,
      bairro: objectValues[7].value,
      cidade: objectValues[8].value,
      estado: objectValues[9].value,
    },
    telefone_fixo: objectValues[10].value,
  };
  return await Api.cadastrarCliente(objectForm);
}

registerButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await registerClient();
});

// function cadastrar() {
//   const newUser = {};
//   for (let i = 0; i < form.length - 1; i++) {
//     newUser[form[i].name] = form[i].value;
//   }
//   return newUser;
// }

// form[form.length - 1].addEventListener("click", async (event) => {
//   event.preventDefault();
//   await Api.cadastrarCliente(cadastrar());
// });
