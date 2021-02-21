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

const Results = () => {

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
                

                <Table bordered>
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
                    <td><Input type="text" name="input" placeholder="Input" /></td>
                    <td><Input type="text" name="input" placeholder="Input" /></td>
                    <td><Input type="text" name="input" placeholder="Input" /></td>
                    <td><Input type="text" name="input" placeholder="Input" /></td>
                    <td><Input type="text" name="input" placeholder="Input" /></td>
                    <td><Input type="text" name="input" placeholder="Input" /></td>
                    </tr>
                </tbody>
                </Table>
                <FormGroup>
                    <Label>Area</Label>
                    <Input type="text" name="input" placeholder="Input" />
                </FormGroup>
            </CardBody>
            </Card>  
        </React.Fragment>
        
    );
}

export default Results;