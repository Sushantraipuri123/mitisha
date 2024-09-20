import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UpdateIntern = () => {
    const { id } = useParams();
    const [intern, setIntern] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [initialData, setInitialData] = useState(null);
    const token = localStorage.getItem("token");

    const { register, handleSubmit, setValue, watch } = useForm();
    const navigate = useNavigate();

    const fetchIntern = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_BASE_URL}/interns/updateIntern/${id}`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                }
            );

            const data = await response.json();
            if (data && data.intern) {
                const internData = data.intern;
                setIntern(internData);
                setInitialData({
                    intername: internData.intername,
                    designation: internData.designation,
                    regNO: internData.regNO,
                    from: internData.from,
                    to: internData.to,
                });
                setValue('intername', internData.intername);
                setValue('designation', internData.designation);
                setValue('regNO', internData.regNO);
                setValue('from', internData.from);
                setValue('to', internData.to);
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
        fetchIntern();
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
                `${import.meta.env.VITE_APP_API_BASE_URL}/interns/updateIntern/${id}`,
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
                toast.success('Intern updated successfully');
                navigate('/admin/intern');
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
                    <h1 className="mb-5">Update Intern</h1>
                    {intern ? (
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="intername" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter intern name"
                                    {...register('intername')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="designation" className="mb-3">
                                <Form.Label>Techonology</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter designation"
                                    {...register('designation')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="regNO" className="mb-3">
                                <Form.Label>Registration Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter registration number"
                                    {...register('regNO')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="from" className="mb-3">
                                <Form.Label>From Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter start date"
                                    {...register('from')}
                                    className="input-admin-form"
                                />
                            </Form.Group>
                            <Form.Group controlId="to" className="mb-3">
                                <Form.Label>To Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter end date"
                                    {...register('to')}
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
                        <Alert variant="warning">No intern data available.</Alert>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateIntern;
