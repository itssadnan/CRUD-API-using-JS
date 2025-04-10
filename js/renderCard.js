function renderUserCard(user) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.userId = user.id;
  
    card.innerHTML = `
      <div class="card-buttons">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
      <img src="${user.avatar}" alt="${user.first_name}" />
      <h3>${user.first_name} ${user.last_name}</h3>
      <p>${user.email}</p>
    `;
  
    return card;
  }