import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

import { AlignLeft } from './components/organisms/AlignLeft';
import { useForm } from '../../hooks/useForm'
import { AlignRight } from './components/organisms/AlignRight';


export const FormativeAction = () => {
    const [ formValues, handleInputChange, reset, setValue ] = useForm(inputNames);

    const [inputNameArray, setInputNameArray] = useState([{test:''}])
    


    const handleSubmit = (e) => {
        e.preventDefault();
        // if (validation(panton,true, true, true,setErrors)) {
        //     dataSubmit();
             console.log(inputNameArray,formValues)   
        // }
      }

    return (
        <div>
            <div className = "center">
            <h1 className="primary width-600 mt-5" >Centro de formación XYZ Información de la acción formativa</h1>
            </div>
            <form onSubmit={handleSubmit} required>
            <div className="displayAround ">
                <div className = "displayBetween ">
                <div className="center mr-10">
                    <AlignLeft
                        formValues = { formValues }
                        handleInputChange = { handleInputChange }
                        inputNameArray = { inputNameArray }
                        setInputNameArray = { setInputNameArray }
                        setValue = {setValue}
                    />
                </div>

                <div className="center displayGrid ml-10">
                    <AlignRight 
                        formValues = { formValues }
                        handleInputChange = { handleInputChange }
                    />
                    <div className={`right  div-save`}>
                        <Button 
                            variant="contained"
                            className="btn-TFPP"
                            onClick={handleSubmit}
                        >Guardar</Button>
                    </div>
                </div>

                </div>
            </div>
            </form>

        </div>
    )
}


const inputNames ={
    nombre:'',
    descripcion:'',
    fechaInicio:'',
    fechaFin:'', 
    ubicacion:'', 
    departamento:'', 
    municipio:'', 
    horasCurso:'', 
    modalidad:'', 
    tipoDeCosto:'', 
    costo:'', 
    participantes:'', 
    numeroCantidadEvaluaciones:'', 
    numeroContrato:'', 
    numeroOrdenDeCompra:'', 
    numeroCompraBolsa:'', 
    numeroItem:'', 
    programa:'', 
    facilitador:'', 
  }