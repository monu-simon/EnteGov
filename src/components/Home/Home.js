// src/components/Home/Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MemberDetails from '../MemberDetails/MemberDetails';

function Home() {
    const [members, setMembers] = useState([]);

    useEffect(() => {

        const fetchMembers = async () => {
            const apiUrl = 'https://sansad.in/api_ls/member?loksabha=17&state=&party=&gender=&ageFrom=&ageTo=&noOfTerms=&searchText=&constituency=&sitting=1&locale=en&month=&profession=&otherProfession=&constituencyCategory=&positionCode=&qualification=&noOfChildren=&isFreedomFighter=&memberStatus=s';
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
