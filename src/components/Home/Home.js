// src/components/Home/Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MemberDetails from '../MemberDetails/MemberDetails';
import { Col, Container, Form, Row } from 'react-bootstrap';

function Home() {
    const [members, setMembers] = useState([]);
    const [states, setStates] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {

        const fetchMembers = async () => {
            const apiUrl = '/api/data';
            const response = await axios.get(apiUrl);
            setMembers(response.data.membersDtoList);
            setFilteredMembers(response.data.membersDtoList);
            const uniqueStates = [...new Set(response.data.membersDtoList.map(member => member.stateName.trim()))];
            setStates(uniqueStates);
            console.log(uniqueStates)
        };

        fetchMembers();

    }, []);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setSelectedState(selectedState);
        if (selectedState === '') {
            setFilteredMembers(members); // If no state selected, show all members
        } else {
            const filtered = members.filter(member => member.stateName.trim() === selectedState);
            setFilteredMembers(filtered);
        }
    };

    return (
        <div>
            <h1>Member Details</h1>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="stateSelect">
                            <Form.Label>Select State</Form.Label>
                            <Form.Control as="select" value={selectedState} onChange={handleStateChange}>
                                <option value="">All States</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col>
                        <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '800px' }}>
                            {members && <MemberDetails members={filteredMembers} />}
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Home;
