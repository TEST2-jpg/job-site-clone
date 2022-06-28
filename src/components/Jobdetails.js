import { ReactComponent as Money } from '../assets/Money.svg'

const Jobdetails = ({ title, company, location, type, pay, description, time, shift, }) => {
    return (

        <div className='card'>
            <div className="title">{title}</div>
            <div className="company">{company}</div>
            <div className="location">{location}</div>
            <div className="container">
                {pay && <div className="pay adds"><Money className='dsvglogo' />{pay}</div>}
                {type && type.map((x, id) => <div key={id} className="type adds">{x}</div>)}
                {shift && shift.map((x, id) => <div key={id} className="type adds">{x}</div>)}
            </div>
            <div className="description">{description.slice(0, 270)}...</div>
        </div>
    )
}

export default Jobdetails