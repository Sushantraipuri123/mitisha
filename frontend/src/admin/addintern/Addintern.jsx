import { useForm } from 'react-hook-form';
import { Button, Form, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addintern() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Handle form submission
      console.log(data);
      // Sending data to server
      const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/interns/createIntern`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Include form data as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear form fields after submission
      reset();
       // Show success toast
       toast.success('Intern added successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
       // Show error toast
       toast.error('Failed to add intern. Please try again.'); 
    }
  };

  return (
    <div className="container">
      <h2 className="text-center syne">Add Intern</h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Container className="mt-5">
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <Form.Group controlId="formInterName" className="mb-3">
                <Form.Label> <strong>Intern Name:</strong> </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter intern name"
                  {...register('intername', { required: 'Intern name is required' })}
                  isInvalid={!!errors.intername}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.intername?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formDesignation" className="mb-3">
                <Form.Label> <strong>Techonology:</strong> </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  {...register('designation', { required: 'Designation is required' })}
                  isInvalid={!!errors.designation}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.designation?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formDuration" className="mb-3">
                <Form.Label> <strong>Duration:</strong> </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter duration"
                  {...register('Duration', { required: 'Duration is required' })}
                  isInvalid={!!errors.Duration}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.Duration?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formRegNO" className="mb-3">
                <Form.Label> <strong>Registration Number:</strong> </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter registration number"
                  {...register('regNO', { required: 'Registration number is required' })}
                  isInvalid={!!errors.regNO}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.regNO?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formFrom" className="mb-3">
                <Form.Label> <strong>From:</strong> </Form.Label>
                <Form.Control
                  type="date"
                  {...register('from', { required: 'Start date is required' })}
                  isInvalid={!!errors.from}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.from?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formTo" className="mb-4">
                <Form.Label> <strong>To:</strong> </Form.Label>
                <Form.Control
                  type="date"
                  {...register('to')}
                  isInvalid={!!errors.to}
                  className="input-admin-form"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.to?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Intern
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Addintern;
