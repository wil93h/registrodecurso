import React from 'react'
import { CssFormControl } from '../atoms/CssFormControl';
import { CssTextField } from '../atoms/CssTextField'
import { CssDatePicker } from '../atoms/CssDatePicker'
import { AddScheduling  } from './AddScheduling';



export const AlignLeft = ({handleInputChange, formValues , errors = '', inputNameArray, setInputNameArray}) => {


    const { nombre,descripcion, fechaInicio, fechaFin, ubicacion,departamento, municipio, horasCurso } = formValues;
    const formValue = ([{id:'1',name:'uno'},{id:'2',name:'dos'},{id:'3',name:'tres'},])


    return (
        <div className="displayGrid">
            <CssTextField 
                    id = {'nombre123'}
                    name = {'nombre'}
                    value = {nombre}
                    label ={ 'Nombre del evento'} 
                    type = {'text'} 
                    handle = {handleInputChange}
                    min = { maxTextField }
                //   helper = {errors.errors['nombre']}
                />

                <CssTextField 
                    id = {'descripcion'}
                    name = {'descripcion'}
                    value = {descripcion}
                    label ={ 'Descripción general del evento'} 
                    type = {'text'} 
                    handle = {handleInputChange}
                    min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
                />
                <div className="displayBetween">
                <CssDatePicker 
                    id = { 'fechaInicio' }
                    name = { 'fechaInicio' }
                    value = { fechaInicio } 
                    label = { "Inicio" }   
                    max = { "200px" }
                    maxDate = { fechaFin }
                    handle = { handleInputChange }
                />
                <CssDatePicker 
                    id = { 'fechaFin' }
                    name = { 'fechaFin' }
                    value = { fechaFin } 
                    label = { "Fin" }   
                    max = { "200px" }
                    minDate = { fechaInicio }
                    handle = { handleInputChange }
                />
                </div>
                <CssTextField 
                    id = {'ubicacion'}
                    name = {'ubicacion'}
                    value = {ubicacion}
                    label ={ 'Ubicación'} 
                    type = {'text'} 
                    handle = {handleInputChange}
                    min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
                />
                <div className="displayBetween">
                    <CssFormControl 
                    id =  { 'departamento' }
                    name = { 'departamento' }
                    value = { departamento }  
                    label = { 'Departamento' }  
                    handle = { handleInputChange } 
                    map = { formValue } 
                    min = { '200px' }
                    // helper = {errors.errors['partNumber']}
                    />
                    <CssFormControl 
                    id =  { 'municipio' }
                    name = { 'municipio' }
                    value = { municipio }  
                    label = { 'Municipio' }  
                    handle = { handleInputChange } 
                    map = { formValue } 
                    min = { '200px' }
                    // helper = {errors.errors['partNumber']}
                    />
                </div>
                <CssTextField 
                    id = {'horasCurso'}
                    name = {'horasCurso'}
                    value = {horasCurso}
                    label ={ 'Cantidad de horas del curso'} 
                    type = {'text'} 
                    handle = {handleInputChange}
                    min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
                />
                <AddScheduling 
                    inputNameArray = { inputNameArray }
                    setInputNameArray = { setInputNameArray }
                />
        </div>
    )
}

const maxTextField = '500px'
