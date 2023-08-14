import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formSubmit } from '../redux/formReducer';

function Form() {
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        contact: ""
    })

    const dispatch = useDispatch();
    const data = useSelector((state) => state.project.users)



    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(formSubmit(input))
        setInput({
            fname: "",
            lname: "",
            contact: "",
            email: "",
            phone: "",
        })
    }
    return (
        <>
            <h1 className='bg-primary p-4 text-center text-white'>Form Handle With Radio Button</h1>

            <div className=' col-6 shadow p-3 mb-5 bg-white rounded mt-5' style={{ margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex  justify-content-around'>
                        <div className='form-group'>
                            <label htmlFor='fname'> First Name</label>

                            <input id='fname' value={input.fname} name='fname' onChange={handleChange} className='form-control' required />

                        </div>
                        <div className='form-group mx-5'>
                            <label >
                                Last Name<br />
                                <input name='lname' value={input.lname} onChange={handleChange} className='form-control' required />
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around my-4'>
                        <div name="contact" className='col-sm-4'>
                            <div > <label> How should contact you ?</label></div>
                            <div className='form-check'>
                                <label htmlFor="phone">Phone</label>
                                <input className="form-check-input" type="radio" name="contact" id="phone" value="phone" onClick={handleChange} required />
                            </div>
                            <div className='form-check'>
                                <label htmlFor="email">Email</label>
                                <input className="form-check-input" type="radio" name="contact" id="email" value="email" onClick={handleChange} required />
                            </div>

                        </div>
                        <div className='col-sm-6'>
                            {input.contact === "phone" &&
                                <div className='form-group mx-5'>    <label>
                                    Phone<br />
                                    <input type="number"  className='form-control' value={input.phone} name='phone' onChange={handleChange} required />
                                </label></div> || input.contact === "email" &&
                                <div className='form-group mx-5'><label>
                                    Email<br />
                                    <input  type="email" className='form-control' value={input.email} name='email' onChange={handleChange} required />
                                </label></div>
                            }
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn px-3 btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>


            <div className=' col-6 shadow p-3 mb-5 bg-white rounded mt-5' style={{ margin: "0 auto" }}>
                {data?.map((user) => {
                    return <div>
                        <span>{user.fname} </span>
                        <span>{user.lname} </span>:
                        <span>{user.phone} </span>
                        <span>{user.email} </span>
                    </div>
                })}
            </div>
        </>
    )
}

export default Form