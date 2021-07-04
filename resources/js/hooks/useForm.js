import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (data = {}) => {
        setValues( data );
    }

    const setValue = (data = {}) => {
        console.log({...values,data},'usehooks')
        setValues(data);
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        console.log(target.name,target.value);

    }

    return [ values, handleInputChange, reset, setValue ];

}
