import {useEffect, useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getIndicators } from "../controller/getIndicator";
import { Indicator } from '../models/indicator.m';

const Listado = () => {

    const [indicator, setIndicator] = useState<Indicator[]>([]);

    useEffect(() => {
        const getDataIdicators = async () => {
            const allIndicators =  await getIndicators();
            setIndicator(allIndicators);
        }    
        getDataIdicators();
    },[]);    

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    
    return (
        <>
            <div className="container">
                <div className="row col-6 offset-md-3">
                    <h2 className="text-center my-4">Indicadores financieros {`${day}/${month}/${year}`}</h2>
                    <ListGroup>
                        {Object.entries(indicator).slice(3,indicator.length).map(([key, value]) => (
                            <ListGroup.Item key={key}>
                            {value.nombre}: {value.valor}
                            </ListGroup.Item>
                        ))}  
                    </ListGroup>
                </div>
            </div>
        </>
    )    

}    

export default Listado;