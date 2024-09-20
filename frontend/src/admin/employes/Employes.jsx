import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Employes() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/employees/getEmploye`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Fetched data:", data.body);
      setEmployees(data.body || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle the delete action
  const handleDelete = (id) => {
    toast.info(
      <div>
      <p className="mb-3">Are you sure you want to delete this employee?</p>
      <div className="d-flex justify-content-start gap-2">
        <button
          onClick={() => confirmDelete(id)}
          className="btn btn-success rounded-pill"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss()}
          className="btn btn-danger rounded-pill"
        >
          No
        </button>
      </div>
    </div>, 
    
    );
  };

  // Function to confirm deletion
  const confirmDelete = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/employees/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update local state immediately
      setEmployees(employees.filter((employee) => employee._id !== id));
      toast.success('Employee deleted successfully!');
    } catch (error) {
      console.error('Error deleting employee:', error);
      toast.error('Failed to delete employee. Please try again.');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []); // Empty dependency array to only run on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container">
        <h2 className="text-center syne">Employees Data</h2>
        <div className="container mt-5">
          {employees.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th className="p-4">EmpID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Designation</th>
                  <th className="p-4">Update</th>
                  <th className="p-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id} className="align-middle">
                    <td className="p-4">{employee.empID}</td>
                    <td className="p-4">{employee.employename}</td>
                    <td className="p-4">{employee.designation}</td>
                    <td className="p-4">
                      <Link to={`/admin/employees/update/${employee._id}`}>
                        Edit
                      </Link>
                    </td>
                    <td className="p-4">
                      <IconButton
                        aria-label="delete"
                        style={{ color: 'red' }}
                        onClick={() => handleDelete(employee._id)} // Fixed the ID issue here
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No employees found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Employes;
