import React from 'react'
import Footer from "../pages/Footer"
import FooterCopyright from "../pages/footercopyright"
import { FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa'
import Towhid from "../assets/towhid-small.jpg"
import "../style/resume.css"

const Resume = () => {
  return (
    <>
        <div className='resume'>
            <div className="resume_wrapper">
                <div className="resume_container">
                    <div className="resume_bio">
                        <div className="self_info">
                            <h2>Towhidul Islam</h2>
                            <p>front end developer</p>
                            <h6><span><FaMailBulk /></span>towhidulislam.dev@gmail.com</h6>
                            <h6><span><FaGithub /></span>https://github.com/imtowhidulislam</h6>
                            <h6><span><FaPhoneAlt /></span>01725101880</h6>
                        </div>
                        <div className="self_img">
                            <img src={Towhid} alt="towhidImage" />
                        </div>
                    </div>
                    <div className='main_content'>
                        <div className="edu_info">
                            <h2>Education</h2>
                            <p>I am a CSE graduate from Eastern University. I have completed my graduation in 2022</p>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <div className="skills_list">
                                <ul className='skills_content'>
                                    <li>Javascript</li>
                                    <li>React Js</li>
                                    <li>Tailwind Css</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Node Js</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project">
                            <h3>React Js</h3>
                            <div className="project_content">
                                <ul>
                                    <li className='project_info'><span>#</span>some details about the project.</li>
                                    <a className='project_link' href="#">here link will be added</a>
                                </ul>
                                <ul>
                                    <li className='project_info'><span>#</span>some details about the project.</li>
                                    <a className='project_link' href="#">here link will be added</a>
                                </ul>
                            </div>
                        </div>
                        <div className="project">
                            <h3>React Js</h3>
                            <div className="project_content">
                                <ul>
                                    <li className='project_info'><span>#</span>some details about the project.</li>
                                    <a className='project_link' href="#">here link will be added</a>
                                </ul>
                                <ul>
                                    <li className='project_info'><span>#</span>some details about the project.</li>
                                    <a className='project_link' href="#">here link will be added</a>
                                </ul>
                            </div>
                        </div>
                        <div className="project">
                            <h3>React Js</h3>
                            <div className="project_content">
                                <ul>
                                    <li className='project_info'><span>#</span>some details about the project.</li>
                                    <a className='project_link' href="#">here link will be added</a>
                                </ul>
                                <ul>
                                    <li className='project_info'><span>#</span>some details about the project.</li>
                                    <a className='project_link' href="#">here link will be added</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default Resume