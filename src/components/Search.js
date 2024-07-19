import axios from 'axios'
import React, { useEffect, useState } from 'react'
import'./Search.css'

const Search = () => {

    const[data, setData] = useState([]);
    const[results,setResults] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=30")
        .then(res =>{
            setData(res.data.results)
            setResults(res.data.results)
        })
        .catch(err => console.log(err));
        console.log(data);
    },[]);

    const handleSerach = (e) => {
        setResults(data.filter(f => f.name.first.toLowerCase().includes(e.target.value)))
        
    }

  return (
    <div className='container'>
        <div className='Serachbox'>
            <input className='searchinput' onChange={handleSerach} placeholder='Search Here for....'/>
            <table className='resultTable'>
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
                        results.map((info,index) => {
                            return <tr key={index}>
                                <td>{info.name.title} {info.name.first} {info.name.last}</td>
                                <td>{info.email}</td>
                                <td>{info.gender}</td>
                                <td><img src={info.picture.medium}/></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Search