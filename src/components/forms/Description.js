import React from "react"


const Description = ({ setFormPage, setLoad, handleChange, description,formPage }) => {
    React.useEffect(() => {
        setLoad(75)
    }, [])
    React.useEffect(() => {
        setFormPage(3)
    },[formPage])
    return (
        <>
            <div className="form--card">
                <label>Job description<span className="star">*</span>
                    <div className="label--desc">Describe the responsibilities of this job, required work experience, skills, or education.
                    </div>
                    <textarea className="desc" name="description" onChange={handleChange} value={description} required></textarea>
                </label>
            </div>
        </>
    )
}

export default Description