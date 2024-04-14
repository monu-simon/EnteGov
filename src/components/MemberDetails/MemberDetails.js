import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function MemberDetails({ members }) {
    console.log(members)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Party</th>
                    <th>State</th>
                    <th>Constituency</th>
                    <th>Profession</th>
                    {/* Add more table headers for additional fields if needed */}
                </tr>
            </thead>
            <tbody>
                {members.map((member, index) => (
                    <tr key={index}>
                        <td>
                            <Link to={`/profile/${member.mpsno}`}>{`${member.initial} ${member.firstName} ${member.lastName}`}</Link>
                        </td>
                        <td>{`${member.partyFname} (${member.partySname})`}</td>
                        <td>{member.stateName}</td>
                        <td>{member.constName}</td>
                        <td>{member.profession}</td>
                        {/* Add more table cells for additional fields if needed */}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default MemberDetails;
