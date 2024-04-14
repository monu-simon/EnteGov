import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserProfileCard from '../UserProfileCard/UserProfileCard';

const UserProfile = () => {

    const { mpsno } = useParams();
    const [memberDetails, setMemberDetails] = useState(null);
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

        fetchMemberDetails();

    }, [mpsno])

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {memberDetails && <UserProfileCard memberDetails={memberDetails} />}

            </div>
        </div> 
    )
}

export default UserProfile