import React, { use, useEffect } from 'react'
import axios from '../utils/axios';
const Home = () => {
    let getproduct = async()=>{
        // {data} -> extracting data directly from returned promise
        try{
            const{data} = await axios.get("/products");
            console.log(data);
            
        }catch (error) {
            console.log("error");
            
        }
    }
    useEffect(()=>{
        getproduct();
        
    }, [])
    return (
        <div className='h-screen'>
            <h1>Home</h1>
            <button onClick={getproduct}>Get Data</button>
        </div>
    )
}

export default Home