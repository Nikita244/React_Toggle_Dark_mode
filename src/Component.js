import React, { useState } from 'react'
import './Component.css';
import dati from "./data";

const Component = () => {
    const [data, setData] = useState(dati);
    const [toggle, setToggle] = useState (false);

    
    return (
        <div className={`main ${toggle ? "dark"  : ""}`}>
            <div className='first'>
                <button className='btn btn-primary my-5' onClick={() => setToggle(!toggle)}><i className="bi bi-sun-fill"></i> <i className="bi bi-moon-fill"></i></button>
            </div>
            <div className='container pt-3'>
                <div className='row d-flex justify-content-center' >
                    {data.map((el) => {
                        const { title, body, id } = el;
                        return (
                            <div className="col-md-6 shadow m-4  square rounded " key={id}>
                                <h4 className='pt-3 pb-1'>{title}</h4>
                                <hr className='w-50 m-auto'></hr>
                                <p className='pt-2'>{body}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Component
