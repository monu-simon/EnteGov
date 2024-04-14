// src/components/Home/Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MemberDetails from '../MemberDetails/MemberDetails';

function Home() {
    const [members, setMembers] = useState([]);

    useEffect(() => {

        const fetchMembers = async () => {
            const apiUrl = '/api/data';
            const response = await axios.get(apiUrl);
            setMembers(response.data.membersDtoList)
        };

        fetchMembers(); 
        
    }, []);

    return (
        <div>
            <h1>Member Details</h1>
            {members && <MemberDetails members={members} />}
        </div>
    );
}

export default Home;
