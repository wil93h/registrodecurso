import React, { useEffect, useState } from 'react'

import { CssFormControl } from '../atoms/CssFormControl';
import { CssTextField } from '../atoms/CssTextField'
import { CssDatePicker } from '../atoms/CssDatePicker'
import { AddScheduling  } from './AddScheduling';
// import { useAxios } from '../../../../hooks/useAxios';
import axios from 'axios';


export const AlignLeft = ({handleInputChange, formValues , setValue, errors = '', inputNameArray, setInputNameArray}) => {

    const urlDepartamentos = 'https://api.npoint.io/253f0ee259ef1620a547/departamentos'
    const { nombre,descripcion, fechaInicio, fechaFin, ubicacion,departamento, municipio, horasCurso } = formValues;
    const formValue = ([{id:'1',name:'uno'},{id:'2',name:'dos'},{id:'3',name:'tres'},])
    const [departamentos, setDepartamentos] = useState([{
        id:'',
        name:''
    }])
    const [municipios, setMunicipios] = useState([{ id:'',name:''}])
    useEffect(async() => {
        const response = await axios.get(urlDepartamentos);
        const {data} = response;
        let Dep = ''
        data.map(value =>{
            Dep=([...Dep,{ id:value.nombre,name:value.nombre}]);
        })
        setDepartamentos(Dep)

        
    },[] )

    const handleChangeForm = async(e)=>{
        let mun = ''
        if( e.target.value){
        const response = await axios.get(urlDepartamentos);
        const {data} = response;
        const item = data.find(value => value.nombre === e.target.value)
        item.municipios.map(value =>{
            mun=([...mun,{ id:value.nombre,name:value.nombre}]);
        })
        setMunicipios(mun);
        setValue({...formValues,municipio:'',departamento:e.target.value})
        }else{
            setValue({...formValues,municipio:'',departamento:''});
        }
    }   

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
                    handle = { handleChangeForm } 
                    map = { departamentos } 
                    min = { '200px' }
                    // helper = {errors.errors['partNumber']}
                    />
                    <CssFormControl 
                    id =  { 'municipio' }
                    name = { 'municipio' }
                    value = { municipio }  
                    label = { 'Municipio' }  
                    handle = { handleInputChange } 
                    map = { municipios } 
                    min = { '200px' }
                    disabled = { !departamento? true:false }
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
