import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import "./Addemploye.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddEmploye() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Handle form submission
      console.log(data);
      // Sending data to server
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/employees/createEmploye`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Include form data as JSON
        }
        
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Show success toast
      toast.success("Employee added successfully!");
      // Clear form fields after submission
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toast("Failed to add employee. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center syne">Add Employee</h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Container className="mt-5">
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <Form.Group controlId="formEmployeName" className="mb-3">
                <Form.Label>
                  {" "}
                  <strong>Employee Name:-</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee name"
                  {...register("employename", {
                    required: "Employee name is required",
                  })}
                  isInvalid={!!errors.employename}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.employename?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formDesignation" className="mb-3">
                <Form.Label>
                  {" "}
                  <strong>Designation:-</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  {...register("designation", {
                    required: "Designation is required",
                  })}
                  isInvalid={!!errors.designation}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.designation?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formEmpID" className="mb-3">
                <Form.Label>
                  {" "}
                  <strong>Employee ID:-</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee ID"
                  {...register("empID", {
                    required: "Employee ID is required",
                  })}
                  isInvalid={!!errors.empID}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.empID?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formDOJ" className="mb-3">
                <Form.Label>
                  {" "}
                  <strong>Date of Joining </strong> (DOJ)
                </Form.Label>
                <Form.Control
                  type="date"
                  {...register("DOJ", {
                    required: "Date of Joining is required",
                  })}
                  isInvalid={!!errors.DOJ}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.DOJ?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formDOR" className="mb-4">
                <Form.Label>
                  {" "}
                  <strong>Date of Resignation</strong> (DOR)
                </Form.Label>
                <Form.Control
                  type="text" // Changed from "text" to "date" for consistency
                  {...register("DOR")}
                  isInvalid={!!errors.DOR}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.DOR?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Employee
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AddEmploye;
