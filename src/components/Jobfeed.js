import { getDocs, collection, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../Firebase'
import Jobdetails from './Jobdetails';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Jobfeed = () => {
    document.body.style = null;
    const [jobs, setJob] = React.useState([])

    React.useState(() => {
        async function read() {
            const q = query(collection(db, 'jobs'), orderBy('time', 'desc', limit(10)))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setJob(prev => [...prev, { ...doc.data(), id: doc.id }])
            });
        }
        read()
    }, [])

    return (
        <div className='body'>
            <div className='jobfeed'>
                <div className='jobdetails'>
                    {jobs && jobs.map(x => <Link to={`q/${x.id}`} key={x.id}><Jobdetails title={x.title} company={x.company} type={x.type} location={x.location} pay={x.pay} description={x.description} /></Link>)}
                </div>
                <div className='jobmoredetails'>
                    <Outlet context={jobs} />
                </div>
            </div>
        </div>
    )
}

export default Jobfeed