import React, { useState } from 'react';
import { 
    CustomInput,
    Input,
    Table 
} from 'reactstrap';

const MaterialList = ({ list, units, onAreaChange }) => {
    const [linkedMaterial, setLinkedMaterial] = useState();

    const updateLinkedMaterial = (index) => {
        setLinkedMaterial(linkedMaterial === index ? -1 : index);
    }


    return(
        <Table hover bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Area</th>
              <th>Linked</th>
            </tr>
          </thead>
          <tbody>
          
            {list.map((material, index) => {
                return(
                    
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{material.Name}</td>
                    <td style={{ width: "30%" }}>
                        <Input 
                            type="number" 
                            size="4" 
                            placeholder={units === 'meters' ? "m²" : "ft²"}
                            onChange={(e) => onAreaChange(index,e)}
                        />
                    </td>
                    <td style={{ width: "5%", textAlign: "end" }}>
                        <CustomInput
                        type="checkbox"
                        id={`checkbox${index}`}
                        checked = {linkedMaterial === index}
                        onChange = {(e) => {updateLinkedMaterial(parseInt(e.target.id.slice(8)))}}
                        />
                    </td>
                </tr>
                );
                
            })}
          </tbody>
        </Table>
    );
}

export default MaterialList