import { createContext, useContext, useState } from "react";


const pack=createContext()

function Props(){
    const [arrData,updatearrData]=useState(['React','JS','Angular','Script'])
    const [data,updateData]= useState('React')
    const [frameWork,updateframeWork]=useState('JS')

    return (<pack.Provider value={{data,frameWork,arrData}}>
        <h2>Hello , this is {data} {frameWork}</h2>
        <Call1></Call1>
    </pack.Provider>);
}

function Call1(){
    const {data,frameWork} = useContext(pack);
    return<div>
    <h1>Under calling function1</h1>
    <h2>Here I'm calling the Main function's data :{data} {frameWork}</h2>
    <h3>This is one way of Calling data from another function</h3>
    <hr></hr>
    <Call2/>
    </div>
}

function Call2(){
    const {arrData} = useContext(pack);
    return<div>
        <h1>Under Second calling function</h1>
        <h2>Calling the Main function's data which is an array :</h2>
        <ul>
            {arrData.map((value,index)=>(
                <li key={index} >{value}</li>
            ))}
        </ul>
    </div>
}

export default Props;