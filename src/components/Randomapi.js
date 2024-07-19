import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Random.css'

const Randomapi = () => {

 const[data, setData] = useState([]);
 const[newdata, setNewdata] = useState([]);

 useEffect(() => {
     axios.get("https://randomuser.me/api/?results=30")
    .then(res =>{ 
        setData(res.data.results)
        setNewdata(res.data.results)
    } )
    .catch(err => console.log(err))
    console.log(data);
 },[])

 const showalldata = () => {
    setNewdata(data)
 }

 const showallmales = () => {
    setNewdata(data.filter(persons => persons.gender === "male"));
 }

 const showallfemales = () => {
    setNewdata(data.filter(persons => persons.gender === "female"));
 }

  return (
    <>
    <div className='inputs'>
        <input onChange={showalldata}  name='data' type='radio' />
        <label>All</label>
        <input onChange={showallmales} name='data' type='radio' />
        <label>Males</label>    
        <input onChange={showallfemales} name='data' type='radio' />
        <label>Females</label>
    </div>
    <div className='showdata'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Profile Pic</th>
                </tr>
            </thead>
            <tbody>
                {
                    newdata.map((data,index) => {
                        return <tr key={index}>
                            <td>{data.name.title} {data.name.first} {data.name.last}</td>
                            <td>{data.email}</td>
                            <td>{data.gender}</td>
                            <td><img src={data.picture.medium}/></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Randomapi