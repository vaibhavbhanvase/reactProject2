import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { form1Submit } from '../redux/task1Reducer';
export function Form() {

    const [input, setInput] = useState({
        fname: "",
        lname: "",
        contact: "",
        email: "",
        phone: "",
    })


    const dispatch = useDispatch();

    const data = useSelector((state) => state.task1.users)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(input);
        dispatch(form1Submit(input))
        setInput({
            fname: "",
            lname: "",
            contact: "",
            email: "",
            phone: "",
        })
    }

    console.log(data);
    return (
        <>
        <h1 className='bg-primary p-4 text-center text-white'>Form Handle With Dropdown</h1>
            <div className=' col-6 shadow p-3 mb-5 bg-white rounded mt-5' style={{ margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex  justify-content-around'>
                        <div className='form-group'>
                            <label className='mx-5'>
                                First Name<br />
                                <input value={input.fname} name='fname' onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label className='mx-3'>
                                Last Name<br />
                                <input name='lname' value={input.lname} onChange={handleChange} className='form-control' />
                            </label>
                        </div>
                    </div>
                    <div className='d-flex my-4 justify-content-around'>
                        <div className='mx-5 form-group'>
                            <div > <label> How should we contact you ?</label></div>
                            <select name='contact' onClick={handleChange} className='p-1 px-4 form-group'>
                                <option>
                                    Choose option
                                </option>
                                <option value='phone'>
                                    Phone
                                </option>
                                <option value='email'>
                                    Email
                                </option>
                            </select>

                        </div>
                        <div>
                            {input.contact === "phone" &&
                               <div className='form-group'> <label>
                               Phone<br />
                               <input value={input.phone} name='phone' onChange={handleChange} className='form-control' />
                           </label></div> || input.contact === "email" &&
                               <div className='form-group'> <label>
                                    Email<br />
                                    <input value={input.email} name='email' onChange={handleChange} className='form-control' />
                                </label>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn px-3 btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

            <div className=' col-6 shadow p-3 mb-5 bg-white rounded mt-5' style={{margin:"0 auto"}}>
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

