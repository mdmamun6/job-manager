import { GrLocation } from 'react-icons/gr';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';



export default function Job({job}) {
    const{id, logo,job_title,company_name,job_type, remote_or_onsite, location, salary} = job;

  return (
    <div className='space-y-3 border rounded p-6'>
      <img className='w-full' src={logo} alt="" />
      <h3 className="text-2xl font-semibold">{job_title}</h3>
      <p className='font-medium'>{company_name}</p>
      <div className="flex gap-6">
        <button className='btn border text-indigo-600	 border-violet-500 bg-transparent'>{remote_or_onsite}</button>
        <button className='btn border text-indigo-600	 border-violet-500 bg-transparent'>{job_type}</button>
      </div>
      <div className="flex justify-between font-medium pb-4">
            <div className='flex items-center gap-2'>
                <GrLocation className='font-medium'></GrLocation>
                <p>{location}</p>
            </div>
            <div className='flex items-center gap-2'>
                <BiDollarCircle className='font-medium'></BiDollarCircle>
                <p>Salary: {salary}</p>
            </div>
      </div>
      <Link to={`/job/${id}`}><button className='btn bg-indigo-800 text-white'>Show Details</button></Link>
    </div>
  )
}
