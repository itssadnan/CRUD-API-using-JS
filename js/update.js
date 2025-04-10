const userId = localStorage.getItem('editUserId');
const form = document.getElementById('updateForm');
const saveBtn = document.getElementById('saveBtn');

async function fetchUserData() {
  const res = await fetch(`https://reqres.in/api/users/${userId}`);
  const json = await res.json();
  return json.data;
}

async function populateForm() {
  const user = await fetchUserData();
  document.getElementById('firstName').value = user.first_name;
  document.getElementById('lastName').value = user.last_name;
  document.getElementById('email').value = user.email;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const updatedData = {
    first_name: document.getElementById('firstName').value,
    last_name: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    job: document.getElementById('job').value
  };

  const res = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });

  if (res.ok) {
    saveBtn.textContent = 'Saved!';
    saveBtn.classList.add('saved');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  }
});

populateForm();
