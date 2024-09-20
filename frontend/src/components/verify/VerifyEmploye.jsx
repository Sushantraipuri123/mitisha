import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { Form, Button, Table } from "react-bootstrap";
import "./Verify.css"; // Import the CSS file

function VerifyEmploye() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [employeeData, setEmployeeData] = useState(null); // State to hold employee data
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/employees/findEmploye`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === 200 && result.success) {
        setEmployeeData(result.body); // Save employee data to state
        setErrorMessage(""); // Clear any previous error messages
      } else {
        setEmployeeData(null); // Clear employee data
        setErrorMessage(result.data.message || "Unexpected response");
      }
    } catch (error) {
      console.error("Error fetching employee:", error);
      setEmployeeData(null); // Clear employee data
      setErrorMessage("Please Enter Valid employee ID");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          type="text"
          placeholder="Enter your Emp ID / Registration no."
          {...register("empID", {
            required: "Emp ID / Registration no. is required",
          })}
          className="rounded-0 border form-footer verify-input rounded-pill mb-2"
        />
        {errors.empID && <p className="text-danger">{errors.empID.message}</p>}
        <div className="">
          <Button type="submit" className="w-100 mt-4 rounded-pill btn-footer">
            Verify Employe
          </Button>
        </div>
      </Form>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            {employeeData ? (
              <Table striped bordered hover>
                <tbody>
                  <tr className="bg-s">
                    <th>Employee ID</th>
                    <td>{employeeData.empID}</td>
                  </tr>
                  <tr className="table-row-odd">
                    <th>Name</th>
                    <td className="text-capitalize">
                      {employeeData.employename}
                    </td>
                  </tr>
                  <tr className="table-row-even">
                    <th>Designation</th>
                    <td className="text-capitalize">
                      {employeeData.designation}
                    </td>
                  </tr>
                  <tr className="table-row-even">
                    <th>DOJ</th>
                    <td>{employeeData.DOJ}</td>
                  </tr>
                  <tr className="table-row-even">
                    <th>Till</th>
                    <td>{employeeData.DOR}</td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmploye;