/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import Countries from './Countries';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
    const [land, setLand] = useState('');
    const [searchValue, setSearchValue] = useState('');

    function handleChange(event) {
        setLand(event.target.value);
    }

    function handleSubmit(event) {
        console.log('Land is =', land);
        event.preventDefault();
        setSearchValue(land);
        setLand('');
    }
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col
                        style={{
                            backgroundColor: '#fff',
                        }}
                        xs={12}
                        sm={10}
                        md={5}
                        lg={4}
                        xl={3}
                    >
                        <form
                            onSubmit={handleSubmit}
                            css={{
                                fontSize: '1.3rem',
                                paddingTop: '20px',
                            }}
                        >
                            <Form.Group controlId="formBasicSearch">
                                <Form.Label size="lg">
                                    Enter country name (min 3 char)
                                </Form.Label>
                                <Form.Control
                                    id="mail"
                                    type="text"
                                    name="country"
                                    value={land}
                                    onChange={handleChange}
                                    placeholder="Country name"
                                    required
                                    minLength="3"
                                    maxLength="15"
                                    pattern="[A-Za-z]+"
                                    css={{
                                        fontSize: '1.2rem',
                                    }}
                                />
                                <Button
                                    variant="primary"
                                    type="submit"
                                    value="Go!"
                                    css={{
                                        fontSize: '1.2rem',
                                        marginTop: '20px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Go!
                                </Button>{' '}
                            </Form.Group>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Countries country={searchValue} />
        </>
    );
};

export default SearchForm;
