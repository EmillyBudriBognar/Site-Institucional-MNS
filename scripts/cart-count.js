document.addEventListener('DOMContentLoaded', function() {
    // Recuperar o número de itens do carrinho do armazenamento local
    let itemCount = localStorage.getItem('cartItemCount') || 0;
  
    // Atualizar o número de itens do carrinho na página
    updateCartCount(itemCount);
  
    document.getElementById('cart-icon').addEventListener('click', function() {
      // Redirecionar para a página do carrinho
      window.location.href = '../carrinho/index.html';
    });
  
    // Simular adição de itens ao carrinho
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('add-to-cart')) {
        itemCount++;
        // Atualizar o número de itens do carrinho no armazenamento local
        localStorage.setItem('cartItemCount', itemCount);
        updateCartCount(itemCount);
      }
    });
  });
  
  function updateCartCount(count) {
    document.getElementById('cart-count').textContent = count;
  }