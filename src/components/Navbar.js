import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from './Api/API'


const Navbar = () => {
    const [poke, setPoke] = useState('pikachu')

    useEffect(()=>{
        const fetch = async()=>{
            const response = await API.get(`pokemon/${poke}`)
            .catch((err)=>{
                console.log('err:',err);
            })
            console.log(response);
        }
        fetch();
    },[])

  return (
    <nav>
        <Link to='/'>Home</Link>
    </nav>
  )
}

export default Navbar