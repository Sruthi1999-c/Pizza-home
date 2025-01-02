
import { useState, useEffect } from 'react';

const useAPI = (url)=>{
    const[data, setData] = useState([]);
useEffect(
    ()=>{
        const fetchdata = async ()=>{
            const response = await fetch(url)
            const data = await response.json();
            setData(data);
        }
        fetchdata();        
    },[url]
)
return {data};

}
export default useAPI;
