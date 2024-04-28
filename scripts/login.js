document.addEventListener('DOMContentLoaded', function() {
  // Verifica se o usuário possui um cookie de sessão
  const isLoggedIn = checkSession();

  const loginLink = document.getElementById('login-link');
  if (isLoggedIn) {
    // Se o usuário estiver logado, busca o nome dele no banco de dados
    const username = getUsername(); // Esta função deve ser substituída pela lógica real para buscar o nome do usuário
    loginLink.textContent = username;
    loginLink.href = "../perfil/index.html"; // Insira o link para a página do usuário logado
  } else {
    // Se o usuário não estiver logado, exibe o link "Sign Up"
    loginLink.textContent = "Sign Up";
    loginLink.href = "../login/index.html"; // Insira o link para a página de cadastro
  }
});

// Função para verificar se o usuário possui um cookie de sessão
function checkSession() {
  // Simulação: verifique se o cookie de sessão existe
  const sessionCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('session='));
  return sessionCookie !== undefined;
}

// Função para buscar o nome do usuário
function getUsername() {
  // Simulação: retorna um nome de usuário fixo
  return "Nome do Usuário";
}