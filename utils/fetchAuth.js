export default async function fetchWithAuth(url, options = {}) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      if (!options.headers) {
        options.headers = {};
      }
      options.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    const response = await fetch(url, options);
    return response;
  }
  