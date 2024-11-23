// Mensagens de erro
// Mensagens de erro
const firstNameErrorMsg = "Primeiro nome tem que conter no minímo 3 letras.";
const lastNameErrorMsg = "Último nome tem que conter no minímo 3 letras.";
const emailErrorMsg = "Tem que inserir um email válido (ex., example@example.com)";
const streetErrorMsg = "Rua tem que conter no minimo 3 letras.";
const cityErrorMsg = "Cidade tem que conter no minimo 3 letras.";
const stateErrorMsg = "Distrito tem que conter no minimo 3 letras.";
const postalCodeErrorMsg = "Codigo-postal tem que ter o seguinte formato: 1234-123.";
const paymentMethodErrorMsg = "Tem que selecionar um método de pagamento.";
const cardNumberErrorMsg = "Cartão tem que conter entre 13 a 19 numeros.";
const expiryDateErrorMsg = "Data de validade tem que estar no formato MM/AA e ter um mês válido";
const cvvErrorMsg = "CVV tem que ter exatamente 3 numeros.";
const termsErrorMsg = "Tem que aceitar os termos e condições.";


// Função para validar o nome (primeiro e último)
function validarNome(nome, errorElement, errorMsg) {
  const nomePattern = /^[a-zA-Z]{3,}$/;  
  if (!nomePattern.test(nome.value)) {
    errorElement.innerHTML = errorMsg;
    return false;
  } else {
    errorElement.innerHTML = '';
    return true;
  }
}

// Função para validar o e-mail
function validateEmail(email, errorElement) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    errorElement.innerHTML = emailErrorMsg;
    return false;
  } else {
    errorElement.innerHTML = '';
    return true;
  }
}

function validarRua(rua, errorElement, errorMsg) {
    const ruaPattern = /^[a-zA-Z0-9\s,]+(\s?nº?\s?\d+)?$/;  // apenas letras, pelo menos 3 caracteres
    if (!ruaPattern.test(rua.value)) {
      errorElement.innerHTML = errorMsg;
      return false;
    } else {
      errorElement.innerHTML = '';
      return true;
    }
  }


function validarLoc(location, errorElement, errorMsg) {
    const locationPattern = /^[a-zA-Z]{3,}$/;  // apenas letras, pelo menos 3 caracteres
    if (!locationPattern.test(location.value)) {
      errorElement.innerHTML = errorMsg;
      return false;
    } else {
      errorElement.innerHTML = '';
      return true;
    }
  }

  function validarPostalCode(postalCode, errorElement) {
    const postalCodePattern = /^\d{4}-\d{3}$/;  // formato 12345 ou 12345-6789
    if (!postalCodePattern.test(postalCode.value)) {
      errorElement.innerHTML = postalCodeErrorMsg;
      return false;
    } else {
      errorElement.innerHTML = '';
      return true;
    }
  }

  function validatePaymentMethod(errorElement) {
    const selectedMethod = document.querySelector('input[name="credit-card"]:checked'); 
    if (!selectedMethod) {  // Se nenhum radio button foi selecionado
      errorElement.innerHTML = paymentMethodErrorMsg;  // Exibe a mensagem de erro
      return false;
    } else {
      errorElement.innerHTML = '';  // Limpa a mensagem de erro
      return true;
    }
  }

  function validarcartao(cartao, errorElement, errorMsg) {
    const cartaoPattern = /^[0-9]{13,19}$/;  
    if (!cartaoPattern.test(cartao.value)) {
      errorElement.innerHTML = errorMsg;
      return false;
    } else {
      errorElement.innerHTML = '';
      return true;
    }
  }

  function validardata(data, errorElement, errorMsg) {
    const dataPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;;  
    if (!dataPattern.test(data.value)) {
      errorElement.innerHTML = errorMsg;
      return false;
    } else {
      errorElement.innerHTML = '';
      return true;
    }
  }

  function validarcvv(cvv, errorElement, errorMsg) {
    const cvvPattern = /^[0-9]{3,3}$/;  
    if (!cvvPattern.test(cvv.value)) {
      errorElement.innerHTML = errorMsg;
      return false;
    } else {
      errorElement.innerHTML = '';
      return true;
    }
  }





// Interceptar o envio do formulário
document.getElementById('payment_form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevenir o envio do formulário

  let formIsValid = true;  // Flag de validade do formulário

  // Validação do First Name
  const first_name = document.getElementById('first_name');
  const first_nameError = document.getElementById('first_nameError');
  if (!validarNome(first_name, first_nameError, firstNameErrorMsg)) {
    formIsValid = false;
  }

  // Validação do Last Name
  const last_name = document.getElementById('last_name');
  const last_nameError = document.getElementById('last_nameError');
  if (!validarNome(last_name, last_nameError, lastNameErrorMsg)) {
    formIsValid = false;
  }

  // Validação do Email
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!validateEmail(email, emailError)) {
    formIsValid = false;
  }

  const street = document.getElementById('street');
  const streetError = document.getElementById('streetError');
  if (!validarRua(street, streetError, streetErrorMsg)) {
    formIsValid = false;
  }

  // Validação da cidade
  const city = document.getElementById('city');
  const cityError = document.getElementById('cityError');
  if (!validarLoc(city, cityError, cityErrorMsg)) {
    formIsValid = false;
  }

  // Validação do estado
  const state = document.getElementById('state');
  const stateError = document.getElementById('stateError');
  if (!validarLoc(state, stateError, stateErrorMsg)) {
    formIsValid = false;
  }

  // Validação do código postal
  const postal_code = document.getElementById('postal_code');
  const postalCodeError = document.getElementById('postalCodeError');
  if (!validarPostalCode(postal_code, postalCodeError, postalCodeErrorMsg)) {
    formIsValid = false;
  }

  const paymentMethodError = document.getElementById('paymentMethodError');
  if (!validatePaymentMethod(paymentMethodError)) {
    formIsValid = false;
  }

  const card_number = document.getElementById('card_number');
  const cardNumberError = document.getElementById('cardNumberError');
  if (!validarcartao(card_number, cardNumberError, cardNumberErrorMsg)) {
    formIsValid = false;
  }

  const expiry_date = document.getElementById('expiry_date');
  const expiryDateError = document.getElementById('expiryDateError');
  if (!validardata(expiry_date, expiryDateError, expiryDateErrorMsg)) {
    formIsValid = false;
  }
  const cvv = document.getElementById('cvv');
  const cvvError = document.getElementById('cvvError');
  if (!validarcvv(cvv, cvvError, cvvErrorMsg)) {
    formIsValid = false;
  }



  // Validação dos termos
  const terms = document.getElementById('terms');
  const termsError = document.getElementById('termsError');
  if (!terms.checked) {
    termsError.innerHTML = termsErrorMsg;
    formIsValid = false;
  } else {
    termsError.innerHTML = '';
  }

  // Se o formulário for válido, enviar (simulado por um alert aqui)
  if (formIsValid) {
    alert("Form submitted successfully!");
    document.getElementById('payment_form').reset();;
  }
});
