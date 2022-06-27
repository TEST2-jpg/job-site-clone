import { ReactComponent as BasicInfoSVG } from '../../assets/formImg/BasicInfoSVG.svg'
import React from 'react'

const Details = ({ setFormPage, handleShift, setLoad, handleCheck, location, handleChange}) => {
    const details = ['Full-time', 'Part-time', 'Permanent', 'Fixed term', 'Temporary', 'OJT (On the job training)', 'Fresh graduate']
    const shift = ['8 hour shift','10 hour shift', '12 hour shift' ,'Shift system' ,'Early shift', 'Day shift', 'Other']
    React.useEffect(() => {
        setLoad(50)
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="form--card h1s">
                <h1>Include Details</h1>
                <div className="form--img"><BasicInfoSVG style={{ width: "300px" }} /></div>
            </div>
            <div className="form--card">
                <legend><div>What is the Job type<span className="star">*</span></div>
                    <div className='details--container'>
                        {details.map(x => {
                            return (
                                <>
                                    <label className='details--label'>
                                        <input className='unset' onChange={handleCheck} type="checkbox" name={x} value={x} />
                                        <span>{x}</span>
                                    </label>
                                </>
                            )
                        })}
                    </div>
                </legend>
            </div>
            <div className="form--card">
                <legend><div>What is the schedule for this job?<span className="star">*</span></div>
                    <div className='details--container'>
                        {shift.map(x => {
                            return (
                                <>
                                    <label className='details--label'>
                                        <input className='unset' onChange={handleShift} type="checkbox" name={x} value={x} />
                                        <span>{x}</span>
                                    </label>
                                </>
                            )
                        })}
                    </div>
                </legend>
            </div>
        </>
    )
}

export default Details