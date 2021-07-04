import React from 'react'
import { CssFormControl } from '../atoms/CssFormControl'
import { CssTextField } from '../atoms/CssTextField'



export const AlignRight = ({handleInputChange, formValues , errors = ''}) => {
    const formModalidad = ([{id:'virtual',name:'Virtual'},{id:'distancia',name:'Distancia'}])
    const formPrograma = ([{id:'1',name:'Programa uno'},{id:'2',name:'Programa dos'},{id:'3',name:'Programa tres'},])

    
    const { modalidad, tipoDeCosto, costo, participantes , numeroCantidadEvaluaciones, numeroContrato, numeroOrdenDeCompra, numeroCompraBolsa, numeroItem, programa, facilitador } = formValues;
    return (
        <div className="displayGrid">
            <CssFormControl 
                id =  { 'modalidad' }
                name = { 'modalidad' }
                value = { modalidad }  
                label = { 'Modalidad' }  
                handle = { handleInputChange } 
                map = { formModalidad } 
                min = { maxTextField }
                // helper = {errors.errors['partNumber']}
            />
            <CssFormControl 
                id =  { 'tipoDeCosto' }
                name = { 'tipoDeCosto' }
                value = { tipoDeCosto }  
                label = { 'Tipo de Costo' }  
                handle = { handleInputChange } 
                map = { formModalidad } 
                min = { maxTextField }
                // helper = {errors.errors['partNumber']}
            />
            <div className="displayBetween">
                <CssTextField 
                    id = {'costo'}
                    name = {'costo'}
                    value = {costo}
                    label ={ 'Costo'} 
                    type = {'text'} 
                    handle = {handleInputChange}
                    max = { '200px' }
                    //   helper = {errors.errors['descripcion']}
                />
                <CssTextField 
                    id = {'participantes'}
                    name = {'participantes'}
                    value = {participantes}
                    label ={ 'Participantes'} 
                    type = {'text'} 
                    handle = {handleInputChange}
                    max = { '200px' }
                    //   helper = {errors.errors['descripcion']}
                />
            </div>

            <CssTextField 
                id = {'numeroCantidadEvaluaciones'}
                name = {'numeroCantidadEvaluaciones'}
                value = {numeroCantidadEvaluaciones}
                label ={ 'Numero de evaluaciones'} 
                type = {'text'} 
                handle = {handleInputChange}
                min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
            />
            <CssTextField 
                id = {'numeroContrato'}
                name = {'numeroContrato'}
                value = {numeroContrato}
                label ={ 'Numero de contrato'} 
                type = {'text'} 
                handle = {handleInputChange}
                min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
            />
            <CssTextField 
                id = {'numeroOrdenDeCompra'}
                name = {'numeroOrdenDeCompra'}
                value = {numeroOrdenDeCompra}
                label ={ 'Numero de orden de compra'} 
                type = {'text'} 
                handle = {handleInputChange}
                min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
            />
            <CssTextField 
                id = {'numeroCompraBolsa'}
                name = {'numeroCompraBolsa'}
                value = {numeroCompraBolsa}
                label ={ 'Numero de compra en bolsa'} 
                type = {'text'} 
                handle = {handleInputChange}
                min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
            />
            <CssTextField 
                id = {'numeroItem'}
                name = {'numeroItem'}
                value = {numeroItem}
                label ={ 'Numero de item'} 
                type = {'text'} 
                handle = {handleInputChange}
                min = { maxTextField }
                //   helper = {errors.errors['descripcion']}
            />
            <CssFormControl 
                id =  { 'programa' }
                name = { 'programa' }
                value = { programa }  
                label = { 'Programa' }  
                handle = { handleInputChange } 
                map = { formPrograma } 
                min = { maxTextField }
                // helper = {errors.errors['partNumber']}
            />
            <CssFormControl 
                id =  { 'facilitador' }
                name = { 'facilitador' }
                value = { facilitador }  
                label = { 'Listado de facilitadores' }  
                handle = { handleInputChange } 
                map = { formModalidad } 
                min = { maxTextField }
                // helper = {errors.errors['partNumber']}
            />
        </div>
    )
}

const maxTextField = '500px'
