import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import UserProfileCard from '../UserProfileCard/UserProfileCard';
import HorizontalBarGraph from '../HorizontalBarGraph/HorizontalBarGraph';
import DebateTable from '../DebateTable/DebateTable';

const UserProfile = () => {
    const { mpsno } = useParams();
    const [memberDetails, setMemberDetails] = useState(null);
    const [mpFund, setMpFundDetails] = useState(null);
    const [debates, setDebates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMemberDetails = async () => {
            try {
                const response = await axios.get(`/api/memberDetails?id=${mpsno}`);
                setMemberDetails(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        const fetchMpFund = async () => {
            try {
                const response = await axios.get(`/api/mpFundDetails?id=${mpsno}`);
                setMpFundDetails(response.data);
            } catch (error) {

            }
        }

        const fetchDebates = async () => {
            try {
                const response = await axios.get(`/api/getDebates?id=${mpsno}`);
                setDebates(response.data.records);
            } catch (error) {

            }
        }

        fetchMemberDetails();
        fetchMpFund();
        fetchDebates();
    }, [mpsno])

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Col md={6}>
                    {memberDetails && <UserProfileCard memberDetails={memberDetails} />}
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Additional Information</Card.Title><br />
                            <Card.Text>
                                <strong>Country Visited:</strong> {memberDetails.countriesVisited}<br /><br />
                                <strong>Education:</strong> <span dangerouslySetInnerHTML={{ __html: memberDetails.education }}/> <br /><br />
                                <strong>Social Activities:</strong> <span dangerouslySetInnerHTML={{ __html: memberDetails.social }}/><br /><br />
                                <strong>Other Info:</strong> <span dangerouslySetInnerHTML={{ __html: memberDetails.otherInfo }} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>

            {mpFund && <HorizontalBarGraph data={mpFund}/>}
            </Row>

            <h3>Debates</h3>
            <Row style={{height: '500px', overflow: 'auto'}}>
                {debates && <DebateTable records={debates}/>}
            </Row>
        </Container>
    )
}

export default UserProfile;
