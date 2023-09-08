const subscriptionContainer = document.getElementById('subscriptionContainer');

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const subBtn = document.getElementById('subButton');
const emailError = document.getElementById('errorMessage');
const dismissBtn = document.getElementById('dismissBtn');

const thanksPopUp = document.getElementById('thanksPopUp');
const userEmail = document.getElementById('userEmail');

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
  let messages = [];
  if (emailInput.value === '' || emailInput.value === null) {
    messages.push('Valid email required');
  }
  if (emailInput.value.match(mailFormat)) {
    e.preventDefault();
    userEmail.innerText = emailInput.value;
    thanksPopUp.classList.remove('hidden');
    subscriptionContainer.classList.add('hidden');
  } else {
    messages.push('Valid email required');
  }
  if (messages.length > 0) {
    e.preventDefault();
    emailError.innerText = messages[0];
    emailInput.classList.add('invalid');
    emailInput.style.color = 'ff6666';
  }

  console.log(messages);
});

const refresh = () => {
  location.reload();
};

dismissBtn.addEventListener('click', refresh);
