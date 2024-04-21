import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Emomar124 from "./Emomar124.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Ajout de l'état pour gérer les erreurs

  const handleSubmit = async (event) => {
    event.preventDefault();
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

      // Redirection vers une page après une connexion réussie (à remplacer par la destination souhaitée)
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Authentication failed", error);
      setError("Nom d'utilisateur ou mot de passe incorrect"); // Définition de l'erreur
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full max-w-screen-lg mx-auto">
        <div className="flex h-full items-center justify-center lg:justify-between">
          <div className="shrink-0 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={Emomar124}
              className="w-full max-w-md mx-auto"
              alt="Image d'exemple"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-full lg:w-5/12 xl:w-5/12 mx-auto md:mx-0 ml-5">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-2 mb-0 text-center font-semibold dark:text-white">
                  EMOMAR PAIE
                </p>
              </div>
              <TEInput
                type="text"
                label="Nom d'utilisateur"
                name="username"
                size="lg"
                className="mb-6"
                onChange={handleChange}
                value={username}
              />
              <TEInput
                type="password"
                label="Mot de passe"
                name="password"
                className="mb-6"
                size="lg"
                value={password}
                onChange={handleChange}
              />
              <div className="text-center lg:text-left">
                <TERipple rippleColor="light">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Connexion
                  </button>
                </TERipple>
              </div>
              {/* Affichage de l'erreur */}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
