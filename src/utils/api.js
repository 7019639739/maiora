const API_URL = 'https://jsonplaceholder.typicode.com'; // Example API

export const fetchData = async (endpoint) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
