// src/components/Home/Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
    const [members, setMembers] = useState([]);

    useEffect(() => {

        const fetchMembers = async () => {
            const apiUrl = 'https://sansad.in/api_ls/member?loksabha=17&state=&party=&gender=&ageFrom=&ageTo=&noOfTerms=&searchText=&constituency=&sitting=1&locale=en&month=&profession=&otherProfession=&constituencyCategory=&positionCode=&qualification=&noOfChildren=&isFreedomFighter=&memberStatus=s';
            const response = await axios.get(apiUrl);
            setMembers(response.membersDtoList)
        };

        fetchMembers();
    },[]);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
}

export default Home;
