import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="text-center">
                <h1 className="font-weight-bold">Election Fever Grips</h1>
                <h2 style={{ 'fontFamily': "Pacifico", 'fontSize': 'xx-large', 'color': 'black' }} >Get Ready for the World's Largest Democracy</h2>
                <Link to="/members" className="btn btn-primary mt-3">Know Your MPs</Link>
            </div>
        </div>
    )
}

export default Dashboard