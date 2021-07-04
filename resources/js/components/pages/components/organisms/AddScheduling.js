import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';

import { CssDate } from '../atoms/CssDate'
import { CssTimePicker } from '../atoms/CssTimePicker'
import { Scheduling } from '../table/Scheduling'
import { useForm } from '../../../../hooks/useForm';


export const AddScheduling = ({inputNameArray, setInputNameArray}) => {

    const [ formValuesArray, handleInputChangeArray, resetArray, setValueArray ] = useForm(inputNameArray2);
    
    const { horasEvento, fechaHoraInicio, fechaHoraFin } = formValuesArray;

    const handleRemoveFields = id => {
        const values  = [...inputNameArray];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputNameArray(values);
    }

    const handleEdit = id => {
        const values  = [...inputNameArray];
        const item = values.find(value => value.id === id);
        const {horasEvento, fechaHoraInicio, fechaHoraFin} = item;
        values.splice(values.findIndex(value => value.id === id), 1 );
        setInputNameArray(values);
        // partNumber = item.partNumber
        setValueArray({horasEvento, fechaHoraInicio, fechaHoraFin});
        console.log(item);
    }
    const handleAdd = (e) => {
    e.preventDefault();
    // const fechaHoraInicio1 = convertTo24Hour(fechaHoraInicio)
    // const fechaHoraFin2 = convertTo24Hour(fechaHoraFin)
  
        setInputNameArray([...inputNameArray , {id: uuidv4(), horasEvento, fechaHoraInicio, fechaHoraFin}]);
        resetArray(inputNameArray2);
 
    }

    return (
        <div>
            <CssDate 
                    id = { 'horasEvento23' }
                    name = { 'horasEvento' }
                    value = { horasEvento } 
                    label = { "Dia" }   
                    max = { "200px" }
                    handle = { handleInputChangeArray }
            />
            <CssTimePicker 
                    id = { 'fechaHoraInicio' }
                    name = { 'fechaHoraInicio' }
                    value = { fechaHoraInicio } 
                    label = { "Inicio" }   
                    max = { "100px" }
                    maxTime = { fechaHoraFin }
                    handle = { handleInputChangeArray }
            />
            <CssTimePicker 
                    id = { 'fechaHoraFin' }
                    name = { 'fechaHoraFin' }
                    value = { fechaHoraFin } 
                    label = { "Fin" }   
                    max = { "100px" }
                    minTime = { fechaHoraInicio }
                    handle = { handleInputChangeArray }
            />
            <Button 
                variant="contained"
                className="btn-TFPP"
                onClick={handleAdd}
            >Adicionar</Button>
            <div>
            <Scheduling 
                values = { inputNameArray }
                handle = { handleRemoveFields }
                handleEdit = { handleEdit }
            />
            </div>
        </div>
    )
}
const inputNameArray2 = {
    horasEvento:'', 
    fechaHoraInicio:'', 
    fechaHoraFin:'', 
};
