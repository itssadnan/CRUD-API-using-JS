let userContainer = document.getElementById('userContainer');
let confirmModal = document.getElementById('confirmModal');
let confirmDeleteBtn = document.getElementById('confirmDelete');
let cancelDeleteBtn = document.getElementById('cancelDelete');
let userIdToDelete = null;

async function init() {
  const users = await getUsers();
  users.forEach(user => {
    const card = renderUserCard(user);
    userContainer.appendChild(card);
  });
}

userContainer.addEventListener('click', async (e) => {
 const card = e.target.closest('.card');
 if(!card){
    return;
 }

 const userId = card.dataset.userId;

 if(e.target.classList.contains('delete')){
    userIdToDelete = userId;
    confirmModal.classList.remove('hidden');
 }else if(e.target.classList.contains('edit')){
    localStorage.setItem('editUserId',userId);
    window.open("update-user.html",'_blank')
 }else{
    localStorage.setItem('viewUserId',userId);
    window.open('details.html','_blank')
 }
});

confirmDeleteBtn.addEventListener('click',async ()=>{
    if(userIdToDelete){
        const deleteStatus = await deleteUser(userIdToDelete);
        if(deleteStatus){
            const card = document.querySelector(`.card[data-user-id="${userIdToDelete}"]`);
            if(card)
            card.remove();
        }
        confirmModal.classList.add('hidden');
        userIdToDelete = null;
    }
})

cancelDeleteBtn.addEventListener('click',()=>{
    userIdToDelete = null;
    confirmModal.classList.add('hidden');
})


init();