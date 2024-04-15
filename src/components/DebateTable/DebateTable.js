import React from 'react';
import { Container, Table } from 'react-bootstrap';

const DebateTable = ({ records }) => {
    return (
        <Container>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Debate Type Description</th>
                        <th>Debate Title</th>
                        <th>Debate Date</th>
                        <th>Reference Keywords</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={index}>
                            <td>{record.debateTypeDesc}</td>
                            <td>{record.debateTitle}</td>
                            <td>{record.debateDate}</td>
                            <td>{record.memberName.join(', ')}</td>
                            <td><span dangerouslySetInnerHTML={{ __html: record.contents }} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DebateTable;
