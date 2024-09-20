import { useEffect, useState } from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Intern() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  // Fetching interns data from backend
  const fetchInterns = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/interns/getIntern`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setInterns(data.body || []); // Adjust based on the actual response structure
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
      <p className="mb-3">Are you sure you want to delete this intern?</p>
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
        `${import.meta.env.VITE_APP_API_BASE_URL}/interns/delete/${id}`,
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
      setInterns(interns.filter((intern) => intern._id !== id));
      toast.success('Intern deleted successfully!');
    } catch (error) {
      console.error('Error deleting intern:', error);
      toast.error('Failed to delete intern. Please try again.');
    }
  };

  useEffect(() => {
    fetchInterns();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container">
        <h2 className="text-center syne">Interns Data</h2>
        <div className="container mt-5">
          {interns.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th className="p-4">EmpID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Technology</th>
                  <th className="p-4">Update</th>
                  <th className="p-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern) => (
                  <tr key={intern._id} className="align-middle">
                    <td className="p-4">{intern.regNO}</td>
                    <td className="p-4">{intern.intername}</td>
                    <td className="p-4">{intern.designation}</td>
                    <td className="p-4">
                      <Link to={`/admin/interns/update/${intern._id}`}>
                        Edit
                      </Link>
                    </td>
                    <td className="p-4">
                      <IconButton
                        aria-label="delete"
                        style={{ color: 'red' }}
                        onClick={() => handleDelete(intern._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No interns found</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Intern;
