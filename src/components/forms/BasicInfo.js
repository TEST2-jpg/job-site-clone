import { ReactComponent as BasicInfoSVG } from '../../assets/formImg/BasicInfoSVG.svg'
import React from 'react'

const BasicInfo = ({ title, company, handleChange, location, setLoad, pay, setFormPage, formPage }) => {
    React.useEffect(() => {
        setLoad(25)
    }, [])

    React.useEffect(() => {
        setFormPage(1)
    },[formPage])
    return (
        <>
            <div className="form--card h1s">
                <h1>Provide basic information</h1>
                <div className="form--img"><BasicInfoSVG style={{ width: "300px" }} /></div>
            </div>
            <div className="form--card">
                <label>Job title <span className="star">*</span>
                    <input type="text" name="title" onChange={handleChange} value={title} required></input>
                </label>
            </div>
            <div className="form--card">
                <label>Your company's name <span className="star">*</span>
                    <input type="text" name="company" onChange={handleChange} value={company} required></input>
                </label>
            </div>
            <div className="form--card">
                <label>Where would you like to advertise this job?<span className="star">*</span>
                    <div className="label--desc">Enter your location</div>

                    <input type="text" name="location" onChange={handleChange} value={location} required></input>
                </label>
            </div>
            <div className="form--card">
                <label>pay<span className="star">*</span>
                    <input type="text" name="pay" onChange={handleChange} value={pay} required></input>
                </label>
            </div>
        </>
    )
}

export default BasicInfo