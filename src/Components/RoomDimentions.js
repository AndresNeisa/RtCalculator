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


const RoomDimentions = ({materials, setMaterials, units, setUnits, volume, setVolume, totalSurface, setTotalSurface, areaLeft, autoCompleteArea, linkedMaterial, setLinkedMaterial}) => {
  // const [totalSurface, setTotalSurface] = useState();
  // const [volume, setVolume] = useState();
  // const [units, setUnits] = useState("meters");
  const areaColor = areaLeft > 0 ? "success" : areaLeft < 0 ? "danger" : "";
  

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
                <Label>Total Surface ({units === 'meters' ? "m²" : "ft²"})</Label>
                <Input 
                  type="number" 
                  name="surface" 
                  placeholder={units === 'meters' ? "m²" : "ft²"}
                  value={totalSurface}
                  onChange={(e) => setTotalSurface(parseFloat(e.target.value))} 
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Volume ({units === 'meters' ? "m³" : "ft³"}) </Label>
                <Input 
                  type="number" 
                  name="volume" 
                  placeholder={units === 'meters' ? "m³" : "ft³"} 
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
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
          list = {materials}
          units = {units}
          // onAreaChange={(index,e) => console.log(index,e.target.value)}
          onAreaChange={setMaterials}
          autoCompleteArea = {autoCompleteArea}
          setMaterials = {setMaterials}
          linkedMaterial = {linkedMaterial}
          setLinkedMaterial = {setLinkedMaterial}
        />
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <p className="mb-0" style={{fontSize: "1.5rem"}}>Area left: 
          <span className={`text-${areaColor} ml-2`}>{areaLeft}</span>
          <span className={"ml-2 text-muted"} style={{fontSize: "1rem"}}>({units === 'meters' ? "m²" : "ft²"})</span>
        </p> 
      </CardBody>
    </Card>
    
    </React.Fragment>
    
  );
}

export default RoomDimentions;