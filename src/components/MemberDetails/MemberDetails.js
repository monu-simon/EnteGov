import React from 'react';
import Table from 'react-bootstrap/Table';

function MemberDetails({ members }) {
    console.log(members)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>MPS No</th>
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
                        <td>{member.mpsno}</td>
                        <td>{`${member.initial} ${member.firstName} ${member.lastName}`}</td>
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