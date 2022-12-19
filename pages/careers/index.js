import React from 'react';
import Navbar from "../../components/Utils/Navbar";
import Head from "next/head";
import Footer from "../../components/Utils/Footer";
import Sidebar from "../../components/Utils/Sidebar";
import Link from 'next/link';

function carrers() {

    return (
        <div>
            <Navbar />
            <Head>
                <title>
                    Carrers | Finovista
                </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>
                    <div className='grid grid-cols-1 gap-10  text-gray-700 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>
                        <p className='text-lg font-semibold'>We’re building careers in public policy.
                            Our extraordinarily diverse team is driven by one belief – public policy, supported by deep analysis, can be a force for good.
                        </p>
                        <h2 className='text-2xl font-semibold'>
                            Open Positions
                        </h2>
                        <p className='-mt-8 text-sm'>
                            Finovista presents an opportunity to use your talent to solve pressing national and global issues. <span className='text-blue-500'>Read more in The Think Tank Route to Public Good</span>
                        </p>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col-span-1 rounded-md shadow-md p-4'>
                                <h1 className='text-sm'>Deputy Programme Manager – Modern Energy Cooking Services Programme, India</h1>
                                <p className='text-sm mt-4'>The position would be reporting directly to the Programme Director and would be leading the
                                    programme under the direct guidance of the programme director. The work combines a mix of
                                    strategic activities and operational activities to ensure the project activities are on track, fulfilling the
                                    annual programme objectives and committed outcomes.
                                </p>
                                <Link href='/careers/deputy-programme-manager'>
                                <button className='bg-blue-500 border-none text-white rounded-md px-4 py-2 mt-4'>Know More</button>
                                </Link>
                            </div>
                            <div className='col-span-1 rounded-md shadow-md p-4'>
                                <h1 className='text-sm'>Manager / Consultant / Analyst - Program Management</h1>
                                <p className='text-sm mt-4'>Program scouting, planning and implementation including conducting in-depth research for
                                    development of concept note, proposal, formulating and launching for effective implementation
                                    and management. Develop and manage the partnership with key collaborators, including policymakers,
                                    enterprises, funding agencies, program partners, service delivery partners and ecosystem
                                    stakeholders.
                                </p>
                                <Link href='/careers/manager-consultant'>
                                <button className='bg-blue-500 border-none text-white rounded-md px-4 py-2 mt-4'>Know More</button>
                                </Link>
                            </div>
                            <div className='col-span-1 rounded-md shadow-md p-4'>
                                <h1 className='text-sm'>Sr. Consultant - Research</h1>
                                <p className='text-sm mt-4'>Conducting both primary and secondary research using various national/international data /information
                                    sources covering policy, technology, and regulatory aspects. Also Research for various activities i.e. knowledge studies, technical assistance &amp; capacity building programs, etc,
                                    to achieve the program objectives including review of various reports prepared
                                </p>
                                <Link href='/careers/senior-consultant'>
                                <button className='bg-blue-500 border-none text-white rounded-md px-4 py-2 mt-4'>Know More</button>
                                </Link>
                            </div>
                            <div className='col-span-1 rounded-md shadow-md p-4'>
                                <h1 className='text-sm'>Assistant Manager – Human Resource</h1>
                                <p className='text-sm mt-4'>Develop and implement HR strategies and initiatives aligned with the overall business strategy and share the
                                    same with the existing and new joiners & Share employees’ concerns, if any, with the concern team managers and try to solve them on timely
                                    manner. Recommend strategies to attract, motivate and retain talent at all levels.
                                </p>
                                <Link href='/careers/assistant-manager'>
                                <button className='bg-blue-500 border-none text-white rounded-md px-4 py-2 mt-4'>Know More</button>
                                </Link>
                            </div>
                            <div className='col-span-1 rounded-md shadow-md p-4'>
                                <h1 className='text-sm'>Internship - Program Management / Research Work</h1>
                                <p className='text-sm mt-4'>Internship program for bachelor&#39;s / master degree candidates provides broad exposure to the consulting
                                    industry and teaches business strategy through full-time engagement. Interns will be responsible for
                                    executing client related engagements under the supervision of Seniors. Intern will determine that work
                                    delivered is of high quality.
                                </p>
                                <Link href='/careers/internship'>
                                <button className='bg-blue-500 border-none text-white rounded-md px-4 py-2 mt-4'>Know More</button>
                                </Link>
                            </div>
                            {/* <div className='col-span-1 rounded-md shadow-md p-4'>
                                <h1 className='text-sm'>Why Finovista?</h1>
                                <p className='text-sm mt-4'>We’re building careers in public policy.
                                    Our extraordinarily diverse team is driven by one belief – public policy, supported by deep analysis, can be a force for good.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default carrers