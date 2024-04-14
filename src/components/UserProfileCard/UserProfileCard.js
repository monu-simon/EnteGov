// UserProfileCard.js
import axios from 'axios';
import React, { useEffect } from 'react';

const UserProfileCard = ({ memberDetails }) => {

    const [imageSrc, setImageSrc] = React.useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`/api/getImage?mpsno=${memberDetails.mpsno}`, {
                    responseType: 'blob'
                });
                const imageUrl = URL.createObjectURL(response.data);
                setImageSrc(imageUrl);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
        return () => {
            URL.revokeObjectURL(imageSrc);
        };
    })

    return (
        <div className="card mx-auto mt-5" style={{ width: '18rem' }}>
            <img
                src={imageSrc}
                className="card-img-top rounded-circle"
                alt="Member's Profile"
            />
            <div className="card-body text-center">
                <h5 className="card-title">{memberDetails.fullName}</h5>
                <p className="card-text">{memberDetails.stateName}</p>
                <p className="card-text">{memberDetails.partyFname}</p>
                <p className="card-text">{memberDetails.constituency}</p>
            </div>
        </div>
    );
};

export default UserProfileCard;
