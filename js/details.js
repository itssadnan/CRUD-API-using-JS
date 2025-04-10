const userId = localStorage.getItem('viewUserId');


async function renderUserDetails(){
    const user = await fetchUser(userId);
    const container = document.getElementById('userDetails');
    container.innerHTML = `
    <img src="${user.avatar}" alt="${user.first_name}">
    <h3>${user.first_name} ${user.last_name}</h3>
    <p>Email: ${user.email}</p>
    <p>ID: ${user.id}</p>
  `;
}

renderUserDetails();