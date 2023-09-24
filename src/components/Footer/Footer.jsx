import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="  bg-indigo-800  w-full text-white">
            <div className="footer py-20 mx-auto w-[80%]">
                <aside>
                <a className='text-4xl text-white font-bold' href="/">CareerHub</a>
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </aside> 
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    </div>
  )
}
