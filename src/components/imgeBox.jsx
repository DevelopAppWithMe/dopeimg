import React from 'react';
import { useHistory } from 'react-router-dom';



const ImageBox = ({imgSrc , myKey}) => {

    let history = useHistory()

    return ( 
        <div style={{
            width : '330px',
            height : '230px',
            backgroundImage : `url(${imgSrc})`,
            boxShadow : '1px 1px 15px #ddd',
            margin : '20px',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover'
        }} onClick= {() => {
            history.push(`/big/${myKey}`)
        }}>

        </div>
     );
}
 
export default ImageBox;