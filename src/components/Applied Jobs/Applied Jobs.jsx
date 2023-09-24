import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredJobApplication } from '../../Utility/LocalStorage';

export default function AppliedJobs() {

  const jobs = useLoaderData();

  const [appliedJob, setAppliedJob] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if(jobs.length > 0){
      const jobsApplied = [];
      for(const id of storedJobId){
        const job = jobs.find(job => job.id === id);
        if(job){
          jobsApplied.push(job)
        }
      }
      setAppliedJob(jobsApplied);
      // const appliedJobs = jobs.filter(job => storedJobId.includes(job.id));
      // console.log(jobs,  storedJobId, jobsApplied)
    }
  },[])
  return (
    <div >
      <h2 className="text-4xl text-center py-20 bg-indigo-800 text-white font-bold">Applied Job</h2>
      <ul className='mx-auto py-20 w-[80%]'>
      {
        appliedJob.map(job => <li key={job.id}>
              <div className='grid grid-cols-4 border gap-6 my-4 p-8 items-center space-y-4 rounded'>
                    <div className="col-span-1">
                      <img className='w-full md:h-[240px]' src={job.logo} alt="" />
                    </div>
                    <div className='col-span-2 space-y-4'>
                      <h3 className="text-2xl font-semibold">{job.job_title}</h3>
                      <p className='font-medium'>{job.company_name}</p>
                      <div className="flex gap-4">
                        <button className='btn border text-indigo-600 border-violet-500 bg-transparent'>
                          {job.remote_or_onsite}
                        </button>
                        <button className='btn border text-indigo-600 border-violet-500 bg-transparent'>
                          {job.job_type}
                        </button>
                      </div>
                          <p>{job.location}</p>
                          <p>Salary: {job.salary}</p>
                    </div>
                    <div className="col-span-1 items-center">
                        <button className='btn bg-indigo-800 text-white'>Show Details</button>
                    </div>
                  </div>
        </li>)
      }
      </ul>
    </div>
  )
}
