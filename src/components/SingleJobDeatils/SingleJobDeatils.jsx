import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { BiDollarCircle } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApllication } from '../../Utility/LocalStorage';

export default function SingleJobDeatils() {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == id)
    console.log(job)

    const handleApplayJob = () =>{
        saveJobApllication(idInt);
        toast('You have Applied Succesfully')
    }
  return (
    <div className=''>
        <h2 className="text-5xl bg-indigo-800 text-white text-center py-20">Job Details</h2>      
      <div className='grid md:grid-cols-4 mx-auto w-[80%] gap-6 py-20'>
            <div className='md:col-span-3 space-y-6'>
            <p><strong>Job Description:</strong> {job.job_description}</p>
            <p><strong>Job Responsibility:</strong> {job.job_responsibility}</p>
            <p><strong>Educational Requirements:</strong> <br></br>{job.educational_requirements}</p>
            <p><strong>Experiences</strong> <br></br>{job.experiences}</p>
            </div>

            <div className='md:col-span-1 space-y-4 bg-blue-100 p-6 rounded'>
                <h3 className="text-xl font-medium border-b pb-2">Jobs Details</h3>
                <div className=" font-medium pb-4">
                <p>{job.job_title}</p>
                <div className='flex items-center gap-2'>
                    <BiDollarCircle className='font-medium'></BiDollarCircle>
                    <p>Salary: {job.salary}</p>
                </div>
                </div>
                <h3 className="text-xl font-medium border-b pb-2">Contact Info</h3>
                <p className='font-medium'>Phone: {job.contact_information.phone}</p>
                <p className='font-medium'>Email: {job.contact_information.email}</p>
                <p className='font-medium'>Address: {job.contact_information.address}</p>
                <a onClick={handleApplayJob} className="btn bg-indigo-800 w-full hover:bg-indigo-800 text-lg font-medium text-white">Apply Now</a>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
