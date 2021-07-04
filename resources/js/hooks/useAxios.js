import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = async (params) => {
      try {
          console.log(params,'adentro')
       const result = await axios(params);
       setResponse(result);
       } catch( error ) {
         setError(error);
       } finally {
         setloading(false);
       }
    };
    
    useEffect(() => {
        fetchData(axiosParams);
    }, [axiosParams]); // execute once only

    return { response, error, loading };
};

