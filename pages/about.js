import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Utils/Navbar";
import Footer from "../components/Utils/Footer";
import AboutUs from "../components/Pages/AboutUs";

function About() {
    return (
        <div>
            <Head>
                <title>About Us | Finovista</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <Navbar />
                <div className="mt-[-50px]">
                    <AboutUs />
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div>
                            <div className='mt-12 text-center'>
                                <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'> Our Team </h2>
                                <p className='mt-4 text-lg text-gray-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.
                                </p>
                                <div className='mt-6'>
                                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                                        <div className='pt-6'>
                                            <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                                                <div className=''>
                                                    <div>
                                                        <img
                                                            className='mt-6 mx-auto h-20 w-20 rounded-full xl:w-24 xl:h-24'
                                                            src='./team/team1.jpg'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                                                        Dr. Anshika Singh
                                                    </h3>
                                                    <p className='mt-1 text-sm text-gray-500'>Research and Programme Management Associate</p>

                                                    <dl className='mt-8 space-y-4'>
                                                        <dt>
                                                            <span className='sr-only'>Title</span>
                                                        </dt>
                                                        <dd className='text-sm text-gray-500'>Anshika Singh did Master’s in Environmental Sciences from Banaras Hindu University and PhD in Biological Sciences She has been involved in number of R&D projects at CSIR_NEERI including, Biological Assessment under EIA study
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pt-6'>
                                            <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                                                <div className=''>
                                                    <div>
                                                        <img
                                                            className='mt-6 mx-auto h-20 w-20 rounded-full xl:w-24 xl:h-24'
                                                            src='./team/team2.jpeg'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                                                    Gautam Kumar Jha
                                                    </h3>
                                                    <p className='mt-1 text-sm text-gray-500'>Public Relation</p>
                                                    <dl className='mt-8 space-y-4'>
                                                        <dt>
                                                            <span className='sr-only'>Title</span>
                                                        </dt>
                                                        <dd className='text-sm text-gray-500'>My name is Gautam Kumar Jha, and I specialise in marketing. I have prior expertise with
                                                            digital and social media marketing, In my present position, I am in charge of public relations, which includes creating strategic
                                                            alliances.

                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pt-6'>
                                            <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                                                <div className=''>
                                                    <div>
                                                        <img
                                                            className='mt-6 mx-auto h-20 w-20 rounded-full xl:w-24 xl:h-24'
                                                            src='./team/team3.jpeg'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                                                    Vandana Seth
                                                    </h3>
                                                    <p className='mt-1 text-sm text-gray-500'>Assistant Manager – HR & Admin</p>
                                                    <dl className='mt-8 space-y-4'>
                                                        <dt>
                                                            <span className='sr-only'>Title</span>
                                                        </dt>
                                                        <dd className='text-sm text-gray-500'>Vandana did B.Com from Bharti College, Delhi University, Master’s in Computer Application from IGNOU . She has been involved in HR and Customer Care Executive role.  She is currently working as an Assistant Manager HR & Admin at Finovista.</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 text-center'>
                            <img src="/img/about.jpg" alt="about" className="w-full object-cover" />
                        </div>
                        <div className='mt-12 text-center'>
                            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                                <div className='pt-6 p-4 bg-gray-50 rounded-lg'>
                                    <p className='text-sm text-gray-500 p-8 text-center line-height-2'>
                                        With a mission to harness the Technology & Innovation to drive growth of organisations, Finovista offers an integrated suite of services in Environment, Social & Governance (ESG), Energy, Clean Cooking, Innovative Solutions, Sustainable Finance, Healthcare, Industry 4.0/4.S and Social Enterprise Development. As a new age consulting firm, we bring forth a unique blend of Technical, Managerial and Project Management skill sets, work on three layers structure viz Advisor, Expert and Professional from India & world, who are extremely capable and experienced in executing complex projects.
                                    </p>
                                </div>
                                <div className='pt-6 p-4 grid justify-center content-center'>
                                    <div>
                                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'> Our Vision </h2>
                                        <p className='mt-4 text-lg text-gray-500 mx-5'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl mt-12'> Our Mission </h2>
                                <p className='mt-12 text-md text-gray-500 mx-5 text-left'>
                                    To become a reliable Service Provider to our partners with trust and accountability.
                                </p>
                                <p className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Our aim is to provide seamless services through a multidisciplinary team that brings unmatchable skills, global network & deep industry knowledge
                                </p>
                                <p className='text-md text-gray-500 mx-5 text-left mt-12'>
                                    Finovista’s core strength lies in its: –
                                </p>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Stronghold on Programme Management and Implementation
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Network & Strong connects for effective collaborations
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Strong pool of National & International Experts for effective implementation
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Wide experience of handling multidisciplinary and multiparty program
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Conceptualisation, Implementation and Monitoring of Large Programme on Bilateral & Multilateral Industrial R&D Funding, Technology Transfer and Management
                                </li>
                            </div>

                            <div>
                                <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl mt-12'> Engagement with prominent Organisation: </h2>
                                <li className='mt-12 text-md text-gray-500 mx-5 text-left'>
                                    Department of International Trade (DIT) and Science & Innovation Network (SIN) India; Foreign, Commonwealth and Development Office (FCDO), UK government for UK India Innovation Partnership Initiative (UKIPI) under COP26
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Modern Energy Cooking Services (MECS) Programme, FCDO UK funded programme, led by Loughborough University, UK
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH India, a German Development Agency;
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Cound Semiconductor Applications (CSA) Catapults
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Innovate UK TKN
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Satellite Application (SA) Catapults
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Trade and Economic Mission, Embassy of Israel in India etc.
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    MSME Technology Development Centre, Govt of India;
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Council of Scientific & Industrial Research (CSIR), India’s National R&D Organisation
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Confederation of Indian Industry (CII) on Defence Research & Development Organisation (DRDO), Govt of India on Technology Transfer assignment
                                    Department of Telecom (DoT), Govt of India
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Telecommunications Standards Development Society India (TSDSI)
                                </li>
                                <li className='mt-1 text-md text-gray-500 mx-5 text-left'>
                                    Telecom Centre of Excellence (TCOE) India on Department of Telecom (DoT), Govt of India on Technology Funding programs for Startup/Spinoff and MSME.
                                </li>
                            </div>

                        </div>
                        <img src='https://circaworks.com/wp-content/uploads/2020/12/what-makes-a-good-team.jpg' alt='about' className='w-full h-96 object-cover my-12' />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About