import React from 'react';
import LineChart from '../Components/LineChart'
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    FormGroup,
    Input,
    Label,
    Table
  } from "reactstrap";

const Results = ({ units, testMaterial, setTestMaterial, autoCompleteArea }) => {

    // const autoCompleteArea = () => {
    //     const area = parseFloat(areaLeft);
    //     const materialArea = parseFloat(testMaterial.Area) || 0;

    //     if(area){
    //         if(area > 0){
    //             setTestMaterial({...testMaterial, Area: materialArea + area});
    //         }
    //         else{
    //             if(Math.abs(area) < materialArea){
    //                 setTestMaterial({...testMaterial, Area: materialArea + area});
    //             }
    //             else{
    //                 setAreaLeft(area + materialArea)
    //                 setTestMaterial({...testMaterial, Area: 0});
    //             }
    //         }
    //     }
        
    // }

    return (
        <React.Fragment>
            <LineChart></LineChart>
        
            <Card>
            <CardHeader>
                <CardTitle tag="h5" className="mb-0">
                Testing Material
                </CardTitle>
            </CardHeader>
            <CardBody>
                

                <Table bordered responsive>
                <thead>
                    <tr>
                    <th>Frequency</th>
                    <th>125Hz</th>
                    <th>250Hz</th>
                    <th>500Hz</th>
                    <th>1KHz</th>
                    <th>2KHz</th>
                    <th>4KHz</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Abs. Coef.</td>
                    <td><Input type="text" name="input" placeholder="0-1" /></td>
                    <td><Input type="text" name="input" placeholder="0-1" /></td>
                    <td><Input type="text" name="input" placeholder="0-1" /></td>
                    <td><Input type="text" name="input" placeholder="0-1" /></td>
                    <td><Input type="text" name="input" placeholder="0-1" /></td>
                    <td><Input type="text" name="input" placeholder="0-1" /></td>
                    </tr>
                </tbody>
                </Table>
                <FormGroup>
                    <Label>Area ({units === 'meters' ? "m²" : "ft²"})</Label>
                    <Input 
                        type="number" 
                        name="input" 
                        placeholder={units === 'meters' ? "m²" : "ft²"} 
                        value = {testMaterial.Area}
                        onChange = {e => {setTestMaterial({...testMaterial, Area: e.target.value})}}
                        onDoubleClick = {
                            (e) => autoCompleteArea({
                                Area: e.target.value, 
                                setMaterialArea: setTestMaterial,
                                Index: -1
                            })}
                    />
                </FormGroup>
            </CardBody>
            </Card>  
        </React.Fragment>
        
    );
}

export default Results;