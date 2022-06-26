import React from "react"
import { setDoc, doc, serverTimestamp, addDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from "../Firebase";
import { ReactComponent as Navform } from '../assets/Navform.svg'


const Jobform = () => {
    document.body.style = 'background: rgb(243 242 241)';
    const [formData, setFormData] = React.useState({
        title: '',
        company: '',
        location: '',
        type: '',
        pay: '',
        description: '',
        time: serverTimestamp()
    })
    const handleChange = (e) => {
        console.log(formData)
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }
    async function submitForm(e) {
        e.preventDefault()
        await addDoc(collection(db, "jobs"), formData);
        setFormData(data => ({
            title: '',
            company: '',
            location: '',
            type: '',
            pay: '',
            description: '',
            time: ''
        }))
    }
    return (
        <>
            <div className='jobfeed--nav'><Navform style={{width: "80px"}}/><span className="needhelp">Need help</span></div>
            <div style={{width:'100%', height:'16px', backgroundColor:'white'}}></div>
            <div className="form--container">
                <form onSubmit={submitForm}>
                    <div className="form--card">
                        <label>Job title
                            <input type="text" name="title" onChange={handleChange} value={formData.title}></input>
                        </label>
                    </div>
                    <div className="form--card">
                        <label>Your company's name
                            <input type="text" name="company" onChange={handleChange} value={formData.company}></input>
                        </label>
                    </div>
                    <div className="form--card">
                        <label>Where would you like to advertise this job?
                            <input type="text" name="location" onChange={handleChange} value={formData.location}></input>
                        </label>
                    </div>
                    <div className="form--card">
                        <label>What is the job type?
                            <input type="text" name="type" onChange={handleChange} value={formData.type}></input>
                        </label>
                    </div>
                    <div className="form--card">
                        <label>What is the pay?
                            <input type="text" name="pay" onChange={handleChange} value={formData.pay}></input>
                        </label>
                    </div>
                    <div className="form--card">
                        <label>Job description
                            <input type="text" name="description" onChange={handleChange} value={formData.description}></input>
                        </label>
                    </div>
                    <button>SUBMIT</button>
                </form>
            </div>
        </>

    )
}

export default Jobform