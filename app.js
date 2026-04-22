function readFields() {
      const email = document.getElementById('emailInput').value;
      const pass  = document.getElementById('passInput').value;
      const box   = document.getElementById('outputBox');

    }

    function submitForm() {
      const email = document.getElementById('emailInput').value.trim();
      const pass  = document.getElementById('passInput').value;
      const alertBox = document.getElementById('alertBox');

      alertBox.className = 'alert-box';

      if (!email || !pass) {
        alertBox.classList.add('alert-error');
        alertBox.style.display = 'block';
        alertBox.textContent = 'Please fill out all fields';
        return;
      }

      alertBox.classList.add('alert-success');
      alertBox.style.display = 'block';
      alertBox.textContent = 'Form submitted! Email: ' + email + ' | Password length: ' + pass.length;
    }

    function createAccount() {
      const alertBox = document.getElementById('alertBox');
      alertBox.className = 'alert-box alert-info';
      alertBox.style.display = 'block';
      alertBox.textContent = 'Create account button click hua! Yahan signup logic add karein.';
    }