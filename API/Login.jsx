

export const LogInAPICall = async (email, password, token) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: `{"email":"${email}","password":"${password}"}`
  };

  const response = await fetch('http://localhost:4000/api/v1/auth/login', options);
  const result = await response.json();
  console.log(result)
  return result;
};