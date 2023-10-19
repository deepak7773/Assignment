import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Morning() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setData(res.data)
    }
    return (
       <div className='row'>
        <div className='col-md-12'>
         <div className='panel panel-default'>
            <div className='panel-body'>
                <div className='row'>
                    {
                        data.map((value,index)=>{
                            return(
                                <div value={index} className='col-md-3'>
                                    <div className='card' style={{ width: '50%'}}>
                                        <img className='card-img-top' src={value.url} alt="card image" style={{ width:'50%'}} />
                                        <div className='card-body'>
                                            <p className='card-text'>{value.title}</p>
                                            <a href="#" className='btn btn-primary'>See Profile</a>
                                        </div>

                                    </div>
                                    </div>
                            )
                        })
                    }

                </div>

            </div>
            
         </div>
        </div>

       </div>
    )
}

export default Morning