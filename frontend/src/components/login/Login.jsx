import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../store/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Topbar from "../../utilities/topbar/Topbar";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { storeTokenInLocalStorage } = useAuth();
  const navigate = useNavigate();


//"http://localhost:8080/admin/loginAdmin"
const onSubmit = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': storeTokenInLocalStorage
  };

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_BASE_URL}/admin/loginAdmin`, 
      data, 
      { headers }
    );
    
    console.log("User Login successfully:", res.data);
    toast.success("Login successfully!");
    
    console.log("Response from server", res.data.token);
    storeTokenInLocalStorage(res.data.token);
    
    navigate("/admin");
  } catch (err) {
    console.error(err);
    
    // Improved error handling
    const errorMessage = err.response?.data?.message || "An error occurred";
    toast.error(errorMessage);
  }
};

  return (
    <>
    <Topbar/>
      <div
        style={{
          maxWidth: "400px",
          margin: "90px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
