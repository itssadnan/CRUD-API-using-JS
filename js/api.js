const API_URL = "https://reqres.in/api/users?page=2";

async function getUsers() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json.data;
}

async function fetchUser(userId){
  const res = await fetch(`https://reqres.in/api/users/${userId}`) ;
  const json = await res.json();
  return json.data;
}

async function deleteUser(userId){
  const res = await fetch(`https://reqres.in/api/users/${userId}`,{
    method: 'DELETE'
  });
  return res.ok;
}

async function updateUserDetails(userId,updatedData){
  const res = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
    
  });
  return res.ok;
}