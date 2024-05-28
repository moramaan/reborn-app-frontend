function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const getToken = async () => {
  const token = getCookie("accessToken");
  if (token) return token;

  const apiUrl = `${process.env.GET_TOKEN_URL}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    return null;
  }
};

export default async function fetchWithAuth(url, options = {}) {
  const accessToken = await getToken();
  if (!accessToken) {
    throw new Error("No access token found.");
  }

  if (accessToken) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers.Authorization = `Bearer ${accessToken}`;
  }

  const response = await fetch(url, options);
  return response;
}
