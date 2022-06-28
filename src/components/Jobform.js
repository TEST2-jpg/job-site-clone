import React from "react"
import { setDoc, doc, serverTimestamp, addDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from "../Firebase";
import { ReactComponent as Navform } from '../assets/Navform.svg'
import { ReactComponent as FormHelp } from '../assets/FormHelp.svg'
import BasicInfo from "./forms/BasicInfo";
import Details from "./forms/Details";
import Description from "./forms/Description";
import { Link } from "react-router-dom";

const Jobform = () => {
    document.body.style = 'background: rgb(243 242 241)';
    const [load, setLoad] = React.useState()
    const [formData, setFormData] = React.useState({
        title: '',
        company: '',
        location: '',
        type: '',
        shift: '',
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
    const handleShift = (e) => {
        console.log(`${e.target.value} is ${e.target.checked}`);
        console.log(formData);
        if (e.target.checked) {
            setFormData(d => ({
                ...d,
                shift: [...formData.type, e.target.value],
            }));
        }

        else {
            console.log()
            setFormData(d => ({
                ...d,
                shift: formData.type.filter((ee) => ee !== e.target.value),
            }));
        }
    }
    const handleCheck = (e) => {
        console.log(`${e.target.value} is ${e.target.checked}`);
        console.log(formData);
        if (e.target.checked) {
            setFormData(d => ({
                ...d,
                type: [...formData.type, e.target.value],
            }));
        }

        else {
            console.log()
            setFormData(d => ({
                ...d,
                type: formData.type.filter((ee) => ee !== e.target.value),
            }));
        }
    }
    async function submitForm(e) {
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
        window.location.reload(false)

    }
    const [formPage, setFormPage] = React.useState(1)
    function nxtpg() {
        setFormPage(prev => prev + 1)
        console.log(formPage)
    }
    function prvpg() {
        if (formPage < 1) {
            setFormPage(1)
        }
        setFormPage(prev => prev - 1)
        console.log(formPage)
    }

    function valitade(e) {

        e.preventDefault()
        nxtpg()
    }

    return (
        <>
            <div className='jobfeed--nav'><Navform style={{ width: "80px" }} /><span className="needhelp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Need help<FormHelp style={{ width: "16.33px", marginLeft: '7px' }} /></span></div>
            <div className="loadbar"><div className="progress" style={{ 'width': `${load}%`, backgroundColor: '#2557A7' }}></div></div>
            <div className="form--container">
                <form onSubmit={valitade}>
                    {formPage <= 1 && <BasicInfo handleChange={handleChange} setFormPage={setFormPage} title={formData.title} company={formData.company} location={formData.location} setLoad={setLoad} pay={formData.pay} formPage={formPage} />}
                    {formPage === 2 && <Details setLoad={setLoad} setFormPage={setFormPage} handleCheck={handleCheck} setFormData={setFormData} handleShift={handleShift} />}
                    {formPage === 3 && <Description handleChange={handleChange} setFormPage={setFormPage} description={formData.description} setLoad={setLoad} formPage={formPage} submitForm={submitForm} />}
                    <div className="form--card btncont">
                        <button type='button' onClick={prvpg} className="btn prvbtn">Back</button>
                        <div>
                            {formPage === 4 && <Link to="/forms"><button className="btn" onClick={submitForm}>Submit</button></Link>}
                            {formPage !== 4 && <button className="btn">Save and continue</button>}
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Jobform