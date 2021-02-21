import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import MaterialList from './MaterialList';

const Materials = [
  {
    Name: 'Wood',
    Area: null,
    Absorption: [0.15, 0.11, 0.1, 0.07, 0.06, 0.07]
  },
  {
    Name: 'Glass',
    Area: null,
    Absorption: [0.35, 0.25, 0.18, 0.12, 0.07, 0.04]
  },
  {
    Name: 'Concrete',
    Area: null,
    Absorption: [0.36, 0.44, 0.31, 0.29, 0.39, 0.25]
  }
]

const RoomDimentions = () => {
  const [totalSurface, setTotalSurface] = useState();
  const [volume, setVolume] = useState();
  const [units, setUnits] = useState("meters");
  const [materials, setMaterials] = useState(Materials);

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag="h5" className="mb-0">
            Room Dimensions
          </CardTitle>
        </CardHeader>
        <CardBody>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Total Surface</Label>
                <Input 
                  type="number" 
                  name="surface" 
                  placeholder={units === 'meters' ? "m²" : "ft²"}
                  value={totalSurface}
                  onChange={(e) => setTotalSurface(e.target.value)} 
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Volume</Label>
                <Input 
                  type="number" 
                  name="volume" 
                  placeholder={units === 'meters' ? "m³" : "ft³"} 
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Label>Measurement units </Label>
          <Row form>
          
          <FormGroup check className="mb-2 ">
            <Label check className="mr-5">
              <Input type="radio" name="units" value="meters" checked={units === "meters"} onChange={(e)=> setUnits(e.target.value)}/> Meters 
            </Label>
            <Label check>
              <Input type="radio" name="units" value="feet" checked={units === "feet"} onChange={(e)=> setUnits(e.target.value)}/> Feet
            </Label>
          </FormGroup>
        
          </Row>

        </CardBody>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Materials
        </CardTitle>
      </CardHeader>
      <CardBody>
        <MaterialList 
          list = {Materials}
          units = {units}
          onAreaChange={(index,e) => console.log(index,e.target.value)}
        />
      </CardBody>
    </Card>

    
    </React.Fragment>
    
  );
}

export default RoomDimentions;