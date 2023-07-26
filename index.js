var successMessage = document.getElementById('success-message');

// Remover a div após 5 segundos
if (successMessage) {
  setTimeout(function () {
    successMessage.remove();
  }, 2500);
}