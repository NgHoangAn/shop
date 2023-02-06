export const url = "https://shopapi-w6b4.onrender.com/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return headers;
};
