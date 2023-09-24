import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

export default function FeaturedJobs() {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(3);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
  return (
    <div className='mx-auto w-[80%] py-20'>
      <div className='text-center space-y-6'>
        <h2 className='text-4xl font-bold'>Featured Jobs: {jobs.length}</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-20'>
            {
                jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
        <button onClick={() => setDataLength(jobs.length)} className='btn mt-10 text-center justify-center bg-indigo-800 hover:bg-indigo-600 text-white'>Show More</button>
      </div>
    </div>
  )
}
