import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import ImageBox from '../../components/imgeBox';
import Loader from '../../components/loader'

const Homepage = () => {

    let [data , setData] = useState({})

    let getData = async (keyword) => {

        setData({})
        
        let res  = await fetch(`https://api.pexels.com/v1/search?query=${keyword}` , {
            headers : {
                'Authorization' : '563492ad6f91700001000001641a6b4e4f3e4d738cb47954326bdf21'
            }
        })

        let data = await res.json()

        console.log(data);

        setData(data)
    }

    useEffect(() => {
        getData("light")
    } , [])

    return ( 
        <div>
            <div style={{
                margin : '30px 0px 20px 80px'
            }}>
                <input style={{
                    padding : '7px 10px',
                    fontSize : '15pt',
                    border : 'none',
                    boxShadow : '1px 1px 15px #ddd'
                }} onChange={(e) => {
                    getData(e.target.value)
                }} type="text" placeholder={"Search Image"}/> 
    
            </div> 
            {data.photos === undefined ? <Loader /> : (
                <div style={{
                    display : 'flex',
                    flexWrap : 'wrap',
                    width : '100%',
                    justifyContent : 'center'
                }}>
                    {data.photos.map((ele) => {
                        return <ImageBox myKey={ele.id} key={ele.id} imgSrc={ele.src.portrait} />
                    })}
                </div>
            )}
        </div>
     );
}
 
export default Homepage;