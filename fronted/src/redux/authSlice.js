import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const setUserIntoLocalStorage = (user, token) => {
    localStorage.setItem("user-gestion-paie", JSON.stringify(user));
    localStorage.setItem("user-gestion-token", token);
}

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials, { rejectWithValue }) => {
    console.log(credentials)
    try {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    console.log(data)
    localStorage.setItem("authToken", data.token); // Stocke le jeton dans le stockage local
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("user-gestion-token"); // Supprime le jeton à la déconnexion
      localStorage.removeItem("user-gestion-paie"); // Supprime le jeton à la déconnexion
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.status = "succeeded";
        setUserIntoLocalStorage(action.payload.user, action.payload.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectAuth = (state) => state.auth;
export const { logout } = authSlice.actions;

export default authSlice.reducer;
