import React from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function signin() {
  const [authState, setAuthState] = React.useState({
    email: "",
    password: "",
  });

  const handleAuth = () => {
    signIn("credentials", {
      email: authState.email,
      password: authState.password,
      redirect: false,
    }).then((res) => {
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Login Successful");
      }
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <input
        type="text"
        placeholder="Email"
        value={authState.email}
        onChange={(e) => setAuthState({ ...authState, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={authState.password}
        onChange={(e) =>
          setAuthState({ ...authState, password: e.target.value })
        }
      />
      <button type="submit" onClick={handleAuth}>
        Sign in
      </button>
    </>
  );
}

export default signin;
