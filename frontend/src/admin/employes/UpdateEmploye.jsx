import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [initialData, setInitialData] = useState(null);
    const token = localStorage.getItem("token");

    const { register, handleSubmit, setValue, watch } = useForm();
    const navigate = useNavigate();

    const fetchEmployee = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_BASE_URL}/employees/updateEmploye/${id}`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                }
            );

            const data = await response.json();
            if (data && data.employee) {
                const employeeData = data.employee;
                setEmployee(employeeData);
                setInitialData({
                    employename: employeeData.employename,
                    designation: employeeData.designation,
                    empID: employeeData.empID,
                    DOJ: employeeData.DOJ,
                    DOR: employeeData.DOR,
                });
                setValue('employename', employeeData.employename);
                setValue('designation', employeeData.designation);
                setValue('empID', employeeData.empID);
                setValue('DOJ', employeeData.DOJ);
                setValue('DOR', employeeData.DOR);
            } else {
                throw new Error("Data body is undefined or null");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    const watchAllFields = watch();  // Watch all fields

    const hasChanges = () => {
        if (!initialData) return false;

        return Object.keys(initialData).some(key => {
            return initialData[key] !== watchAllFields[key];
        });
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_BASE_URL}/employees/updateEmploye/${id}`,
                {
                    method: "POST",  // Change to PUT or PATCH if needed
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            if (response.ok) {
                toast.success('Employee updated successfully');
                navigate('/admin/employes');
            } else {
                throw new Error(result.message || 'Update failed');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={8} lg={6}>
                    <h1 className="mb-5">Update Employee</h1>
                    {employee ? (
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="employename" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter employee name"
                                    {...register('employename')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="designation" className="mb-3">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter designation"
                                    {...register('designation')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="empID" className="mb-3">
                                <Form.Label>Employee ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter employee ID"
                                    {...register('empID')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="DOJ" className="mb-3">
                                <Form.Label>Date of Joining</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('DOJ')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="DOR" className="mb-3">
                                <Form.Label>Date of Resignation</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('DOR')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={!hasChanges()}  // Disable button if no changes
                            >
                                Update
                            </Button>
                        </Form>
                    ) : (
                        <Alert variant="warning">No employee data available.</Alert>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateEmployee;
