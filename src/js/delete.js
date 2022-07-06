import Api from "./Api.js";

const clientes = await Api.listarClientes();
const buscarClientes = document.querySelector("#buscarCliente");

clientes.forEach(({ nome }) => {
  const clienteOption = document.createElement("option");
  clienteOption.innerText = nome;
  buscarClientes.append(clienteOption);
});

const deletButton = document.querySelector(".btn-delete");

deletButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const filtroCliente = clientes.find(
    (elem) => elem.nome === buscarClientes.value
  );
  Api.deletarCliente(filtroCliente.id);
});
