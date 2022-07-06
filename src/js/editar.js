import Api from "./Api.js";

const clientes = await Api.listarClientes();
const buscarClientes = document.querySelector("#buscarCliente");

clientes.forEach(({ nome }) => {
  const clienteOption = document.createElement("option");
  clienteOption.innerText = nome;
  buscarClientes.append(clienteOption);
});

const formEditar = document.querySelector("#editForm");

const editButton = document.querySelector("#btnEdit");

const searchButton = document.querySelector("#btnBuscarCliente");

const objetoEditar = [...formEditar.elements];

function filtrarCliente() {
  const clienteFiltrado = clientes.find(
    (elem) => elem.nome === buscarClientes.value
    );
    console.log(clienteFiltrado)
    if (clienteFiltrado) {
    const endereco = clienteFiltrado.endereco;
    formEditar[0].value = clienteFiltrado.nome;
    formEditar[1].value = clienteFiltrado.endereco;
    formEditar[2].value = clienteFiltrado.sexo;
    formEditar[3].value = clienteFiltrado.email;
    formEditar[4].value = endereco.cep;
    formEditar[5].value = endereco.rua;
    formEditar[6].value = endereco.numero;
    formEditar[7].value = endereco.bairro;
    formEditar[8].value = endereco.cidade;
    formEditar[9].value = endereco.estado;
    formEditar[10].value = clienteFiltrado.telefone;
  
  }
}

async function editarForm() {
  const newName = {
    nome: objetoEditar[0].value,
  };
  const filtroCliente = clientes.find(
    (elem) => elem.nome === buscarClientes.value
  );
  return await Api.editarCliente(filtroCliente.id, newName);
}

editButton.addEventListener("click", async (event) => {
  event.preventDefault();
  editarForm();
});

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  filtrarCliente();
});
