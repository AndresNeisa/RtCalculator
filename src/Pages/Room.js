import React, { useState, useEffect } from 'react';
import { Col, Container, Row} from 'reactstrap';
import RoomDimentions from '../Components/RoomDimentions';
import Results from '../Components/Results';

const Materials = [
    {
      Name: 'Wood',
      Area: "",
      Absorption: [0.15, 0.11, 0.1, 0.07, 0.06, 0.07]
    },
    {
      Name: 'Glass',
      Area: "",
      Absorption: [0.35, 0.25, 0.18, 0.12, 0.07, 0.04]
    },
    {
      Name: 'Concrete',
      Area: "",
      Absorption: [0.36, 0.44, 0.31, 0.29, 0.39, 0.25]
    }
  ];

const TestMaterial = {
    Area: "",
    Absorption: [0.36, 0.44, 0.31, 0.29, 0.39, 0.25]
}

const Room = () => {
    const [materials, setMaterials] = useState(Materials);
    const [units, setUnits] = useState("meters");
    const [volume, setVolume] = useState();
    const [totalSurface, setTotalSurface] = useState();
    const [testMaterial, setTestMaterial] = useState(TestMaterial);

    const convertDimension = (units,dim,rate) => {
        return units === "meters" ? dim * rate : dim / rate;
    }

    useEffect(() =>{
        // Materials Area
        const m = materials.map(material => {
            if(material.Area){
                material.Area = convertDimension(units,material.Area,10.764);
            }
            return material;
        })
        setMaterials(m);

        // Total Surface
        totalSurface && setTotalSurface(convertDimension(units,totalSurface,10.764));

        //Volume
        volume && setVolume(convertDimension(units,volume,35.315));

        // Test Material Area
        testMaterial.Area && setTestMaterial({...testMaterial, Area:
            convertDimension(units,testMaterial.Area,10.764)});
    },[units])

    return(
        
        <Container fluid className="p-0">
            <h1 className="h3 mb-3">Reverberation Time Calculator v.1</h1>

            <Row>
                <Col xl="5">
                    <RoomDimentions
                        materials = {materials}
                        setMaterials = {setMaterials}
                        units = {units}
                        setUnits = {setUnits}
                        volume = {volume}
                        setVolume = {setVolume}
                        totalSurface = {totalSurface}
                        setTotalSurface = {setTotalSurface}
                    />
                </Col>

                <Col xl="7">
                    <Results
                        units = {units}
                        testMaterial = {testMaterial}
                        setTestMaterial = {setTestMaterial}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Room;