import { useOutletContext, useParams } from "react-router-dom";

export default function Card() {
    const jobs = useOutletContext();
    let { id } = useParams()
    const jobDetail = jobs.find(job => job.id === id)
    return (
        <div className="q">
            <div className="detail--section top">
                {console.log('render test')}
                <div style={{ padding: '20px 13px 15px' }}>
                    <div className="title"> {jobDetail.title}</div>
                    <div className="company">{jobDetail.company}</div>
                    <div className="location">{jobDetail.location}</div>
                    <div style={{ margin: '10px 20px 0px 0px' }}>
                        <button className="btn">Apply now</button>
                    </div>
                </div>
            </div>
            <div className="mid">
                <div className="detail--section">
                    <div style={{ padding: '20px 13px 15px' }}>
                        <div className="jobdetail--title"> Job Details</div>
                        <div className="detail--detail bold"> Salary</div>
                        <div className="detail--detail"> {jobDetail.pay}</div>
                        <div className="detail--detail bold"> Job Type</div>
                        {jobDetail.type.map(x => <div className="detail--detail" style={{marginBottom: '0'}}> {x}</div>)}
                    </div>
                </div>
                <div className="detail--section">
                    <div style={{ padding: '20px 13px 15px' }}>
                        <div className="jobdetail--title"> Full Job Description</div>
                        <div className="detail--detail"> {jobDetail.description}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}