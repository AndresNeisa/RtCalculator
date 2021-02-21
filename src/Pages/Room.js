import React from 'react';
import { Col, Container, Row} from 'reactstrap';
import RoomDimentions from '../Components/RoomDimentions';
import Results from '../Components/Results';

const Room = () => {
    return(
        <Container fluid className="p-0">
            <h1 className="h3 mb-3">Reverberation Time Calculator v.1</h1>

            <Row>
                <Col xl="5">
                    <RoomDimentions></RoomDimentions>
                </Col>

                <Col xl="7">
                    <Results></Results>
                </Col>
            </Row>
        </Container>
    );
}

export default Room;