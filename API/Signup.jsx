

export const SignupAPICall = async (name, email, password) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: `{"name":"${name}","email":"${email}","password":"${password}"}`
  };

  const response = await fetch('http://localhost:4000/api/v1/auth/register', options);
  const result = await response.json();
  console.log(result.user)
  return result.user;
}