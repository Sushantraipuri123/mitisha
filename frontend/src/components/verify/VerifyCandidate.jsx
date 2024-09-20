import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { Form, Button, Table } from "react-bootstrap";
import "./Verify.css"; // Import the CSS file

function VerifyCandidate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const [internData, setInternData] = useState(null); // State to hold intern data
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/interns/findIntern`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ regNO: data.empID }), 
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === 200 && result.success) {
        setInternData(result.body); // Save intern data to state
        setErrorMessage(""); // Clear any previous error messages
      } else {
        setInternData(null); // Clear intern data
        setErrorMessage(result.message || "Unexpected response"); // Adjust error message
      }
    } catch (error) {
      console.error("Error fetching intern:", error);
      setInternData(null); // Clear intern data
      setErrorMessage("Please Enter Valid intern ID");
    }
  };

  console.log(internData);
  
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
            Verify Intern
          </Button>
        </div>
      </Form>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            {internData ? (
              <Table striped bordered hover>
                <tbody>
                  <tr className="bg-s">
                    <th>Intern ID</th>
                    <td>{internData.regNO}</td>
                  </tr>
                  <tr className="table-row-odd">
                    <th>Name</th>
                    <td className="text-capitalize">
                      {internData.intername}
                    </td>
                  </tr>
                  <tr className="table-row-even">
                    <th>Techonology</th>
                    <td className="text-capitalize">
                      {internData.designation}
                    </td>
                  </tr>
                  <tr className="table-row-even">
                    <th>Duration</th>
                    <td>{internData.Duration}</td>
                  </tr>
                  <tr className="table-row-even">
                    <th>From</th>
                    <td>{internData.from}</td>
                  </tr>
                  <tr className="table-row-even">
                    <th>To</th>
                    <td>{internData.to}</td>
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

export default VerifyCandidate;
