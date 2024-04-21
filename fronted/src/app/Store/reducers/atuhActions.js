// actions/authActions.js
export const login = (username, password) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
  
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Authentication failed");
      }
  
      const data = await response.json();
      dispatch({ type: "LOGIN_SUCCESS", payload: data.token });
  
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: "Nom d'utilisateur ou mot de passe incorrect" });
    }
  };
  
  export const logout = () => {
    return { type: "LOGOUT" };
  };
  