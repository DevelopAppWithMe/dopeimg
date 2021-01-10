import fetch from 'node-fetch';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader'

const BigImage = () => {

    let {id} = useParams()
    let [img , setImg] = useState(null)

    let getData = async (id) => {
        let res = await fetch(`https://api.pexels.com/v1/photos/${id}` , {
            headers : {
                'Authorization' : '563492ad6f91700001000001641a6b4e4f3e4d738cb47954326bdf21'
            }
        })

        let data = await res.json()

        setImg(data)
    }

    useEffect(() => {
        getData(id)
    }, [])

    return ( 
        <div>
            {img === null ? <Loader /> : (
                <div>
                    <div style={{
                        width : '100%',
                        height : '90vh',
                        backgroundImage : `url("${img.src.large}")`,
                        backgroundSize : 'cover',
                        backgroundPosition : 'center',
                
                    }} alt=""/>
                    <Link to={'/'} style={{
                        padding : '7px 20px',
                        backgroundColor : 'purple',
                        color : 'white',
                        border : 'none',
                        margin : '20px'
                    }} exact ><a>Back</a></Link>
                    <a style={{
                        padding : '7px 20px',
                        backgroundColor : 'purple',
                        color : 'white',
                        border : 'none',
                        margin : '20px'
                    }} href={img.src.original} download>download</a>
                </div>
            )}
        
        </div>
     );
}
 
export default BigImage;