document.addEventListener('DOMContentLoaded', () => {
  const clienteForm = document.getElementById('clienteForm');
  const pedidoForm = document.getElementById('pedidoForm');
  const clienteInfo = document.getElementById('clienteInfo');

  clienteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const telefono = document.getElementById('telefono').value;
    try {
      const response = await fetch(`http://localhost:3000/clientes?telefono=${telefono}`);
      const clientes = await response.json();
      if (clientes.length > 0) {
        mostrarDatosCliente(clientes[0]);
      } else {
        alert('Cliente non atopado');
      }
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      alert('Erro ao buscar cliente');
    }
  });

  pedidoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const descricionPedido = document.getElementById('descricionPedido').value;
    const telefono = document.getElementById('telefono').value;
    try {
      const response = await fetch('http://localhost:3000/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telefono: telefono,
          descricion: descricionPedido,
          data: new Date().toISOString()
        }),
      });
      await response.json();
      alert('Pedido realizado con éxito!');
      pedidoForm.reset();
    } catch (error) {
      console.error('Erro ao realizar o pedido:', error);
      alert('Erro ao realizar o pedido');
    }
  });

  function mostrarDatosCliente(cliente) {
    document.getElementById('clienteNome').textContent = `Nome: ${cliente.nome}`;
    document.getElementById('clienteEnderzo').textContent = `Enderezo: ${cliente.enderezo}`;
    document.getElementById('clientePedidoTipico').textContent = `Pedido típico: ${cliente.pedidoTipico}`;
    document.getElementById('descricionPedido').value = cliente.pedidoTipico;
    clienteInfo.style.display = 'block';
    pedidoForm.style.display = 'block';
  }
});


