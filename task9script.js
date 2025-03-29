document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const userTableBody = document.querySelector('#userTable tbody');

  // Handle registration
  if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const address = document.getElementById('address').value.trim();

      const user = { name, email, contact, address };

      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      alert('User registered successfully!');
      registrationForm.reset();
    });
  }

  // Handle table display
  if (userTableBody) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
      userTableBody.innerHTML = '<tr><td colspan="4">No users registered.</td></tr>';
    } else {
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.contact}</td>
          <td>${user.address}</td>
        `;
        userTableBody.appendChild(row);
      });
    }
  }
});
