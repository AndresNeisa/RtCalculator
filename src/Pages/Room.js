import React, { useState, useEffect, useRef } from 'react';
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
    Absorption: ["", "", "", "", "", ""]
}

const Room = () => {
    const [materials, setMaterials] = useState(Materials);
    const [units, setUnits] = useState("meters");
    const [volume, setVolume] = useState("");
    const [totalSurface, setTotalSurface] = useState("");
    const [testMaterial, setTestMaterial] = useState(TestMaterial);
    const [areaLeft, setAreaLeft] = useState();
    const [linkedMaterial, setLinkedMaterial] = useState(-1);
    const [linkUpdated, setLinkUpdated] = useState(false);
    const [reverberationTime, setRevTime] = useState([]);
    // const prevMaterials =  usePrevious(materials[0].Area);
    const prevMaterials =  usePreviousDeep([...materials.map(i => i.Area)]);
    const prevTestMaterial = usePrevious(testMaterial.Area);

    const convertDimension = (units,dim,rate) => {
        return units === "meters" ? dim * rate : dim / rate;
    }

    const autoCompleteArea = (opt) => {
        const area = parseFloat(areaLeft);
        const materialArea = parseFloat(opt.Area) || 0;

        if(area){
            if(area > 0){
                if (opt.Index < 0){
                   opt.setMaterialArea({...testMaterial, Area: materialArea + area});
                }
                else{
                    let tempMaterialList = [...Materials];
                    tempMaterialList[opt.Index].Area =  materialArea + area;
                    opt.setMaterialArea(tempMaterialList);
                }
            }
            else{
                if(Math.abs(area) < materialArea){
                    if (opt.Index < 0){
                        opt.setMaterialArea({...testMaterial, Area: materialArea + area});
                     }
                     else{
                         let tempMaterialList = [...Materials];
                         tempMaterialList[opt.Index].Area =  materialArea + area;
                         opt.setMaterialArea(tempMaterialList);
                     }
                }
                else{
                    setAreaLeft(area + materialArea);
                    if (opt.Index < 0){
                        opt.setMaterialArea({...testMaterial, Area: 0});
                     }
                     else{
                         let tempMaterialList = [...Materials];
                         tempMaterialList[opt.Index].Area =  0;
                         opt.setMaterialArea(tempMaterialList);
                     }
                }
            }
        }
        
    }

    const reverbTime = () => {
        if(areaLeft === 0 && volume > 0){
            const x = units === 'meters' ? 0.161 : 0.049;
            const abs = materials.map(mat => {
                return(mat.Absorption.map(a => a * (mat.Area || 0)));
            });
            const absTest = testMaterial.Absorption.map(a => a * (testMaterial.Area || 0));
             let rt = [];
            for (var i = 0; i < 6; i++){
                const totalAbs = abs.map(a => a[i]).reduce((sum, cur) => sum + cur ,0)+ absTest[i];
                rt.push(x * volume / totalAbs);
            }
            setRevTime(rt);
        }
    }

    // const areaComparison = (prev, current, mod, setter) =>{
    //     const delta = prev - current;
    //     if(mod+delta < 0){
    //       setter(0);
    //       setLinkedMaterial(-1);
    //     }
    //     else{
    //       setter(mod+delta);
    //     }
    // }

    // const updateLinkedAreas = (a, prevA, setA, b, prevB, setB) => {
    //     setLinkUpdated(!linkUpdated);
    //     if(prevA !== a){
    //         areaComparison(prevA, a, b, setB);
    //     }
    //     else if(prevB !== b){
    //         areaComparison(prevB, b, a, setA);
    //     }
    // }

    // const setMaterialArea = (index,value) => {
    //     let temporaryList = [...materials];
    //     temporaryList[index].Area = parseFloat(value);
    //     setMaterials(temporaryList);
    // }


    // DIMENSIONS UPDATE
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

        // Area Left
        areaLeft && setAreaLeft(convertDimension(units,areaLeft,10.764));
    },[units]);

    // AREA CHANGES
    useEffect(() => {
        setAreaLeft(
            parseFloat(totalSurface || 0) -
            (parseFloat(materials.reduce((roomArea,material) => roomArea + (parseFloat(material.Area) || 0), 0) || 0) +
            parseFloat(testMaterial.Area || 0)));

        

    }, [materials, totalSurface, testMaterial, volume]);

    useEffect(() => {
        reverbTime();
    },[areaLeft, ...testMaterial.Absorption])
    // LINKED AREAS
    // useEffect(() => {
    //     console.log(linkUpdated);
    //     if(linkedMaterial > -1 && !linkUpdated){
    //         console.log('updating');
    //         updateLinkedAreas(
    //             materials[linkedMaterial].Area,
    //             prevMaterials[linkedMaterial],
    //             (value) => setMaterialArea(linkedMaterial,value),
    //             testMaterial.Area,
    //             prevTestMaterial,
    //             (value) => {setTestMaterial({...testMaterial, Area: value})}
    //             );
    //     }
    //     else if(linkedMaterial > -1){setLinkUpdated(!linkUpdated);}
    //   },[[...materials.map(mat => mat.Area)],testMaterial.Area]);

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
                        areaLeft = {areaLeft}
                        autoCompleteArea = {autoCompleteArea}
                        linkedMaterial = {linkedMaterial}
                        setLinkedMaterial = {setLinkedMaterial}
                    />
                </Col>

                <Col xl="7">
                    <Results
                        units = {units}
                        testMaterial = {testMaterial}
                        setTestMaterial = {setTestMaterial}
                        areaLeft = {areaLeft}
                        setAreaLeft = {setAreaLeft}
                        autoCompleteArea = {autoCompleteArea}
                        revTime = {reverberationTime}
                    />
                </Col>
            </Row>
        </Container>
    );
}

// Hook
function usePreviousDeep(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [[...value.map(item => item.Area)]]);
    return ref.current;
  }

  function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
    
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }
  
export default Room;