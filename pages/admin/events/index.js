import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/admin/Navbar";
import Topbar from "../../../components/admin/Topbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";

function index() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // fetch all the events froma api

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch(`../../api/events?page=${page}`);
      const events = await res.json();
      if (events.events.length === 0) {
        setPage(1);
      }
      setEvents(events.events);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  // delete an event

  const deleteEvent = async (id) => {
    try {
      const res = await fetch("../../api/events", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <Head>
        <title>Finovista Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-center pt-6">
                <img src="/img/finovista.png" alt="" className="w-40" />
              </div>
              <Navbar />
            </div>
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Topbar />

            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className="grid ">
                <div className="w-full">
                  <div className="mb-4">
                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                      <div className="grid">
                        {/* <Home /> */}
                        <div className="flex items-center justify-between titleContent">
                          <h1>All Events</h1>
                          <Link href="/admin/events/add">Add Event</Link>
                        </div>
                        {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <table className="table-auto w-full mt-4 border-collapse contentTable">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                              <tr className="text-left">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2 text-center w-[90px]">
                                  Actions
                                </th>
                                <th className="px-4 py-2 text-center w-[150px]">
                                  Delete
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-200">
                              {events.map((event) => (
                                <tr key={event._id}>
                                  <td className="border px-4 py-2 text-blue-400 font-[500] cursor-pointer">
                                    <Link href={`../events/${event.slug}`}>
                                      {event.title}
                                    </Link>
                                  </td>
                                  <td className="px-4 py-2 tableLink flex w-[90px] gap-4 grid-cols-2 align-middle">
                                    <Link href={`../events/${event.slug}`}>
                                      <FontAwesomeIcon
                                        icon={faEye}
                                        height="20px"
                                        className="cursor-pointer hover:text-blue-600 transform hover:scale-110"
                                      />
                                    </Link>
                                    <Link
                                      href={`/admin/events/edit/${event.slug}`}
                                    >
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        height="20px"
                                        className="cursor-pointer hover:text-blue-600 transform hover:scale-110"
                                      />
                                    </Link>
                                  </td>
                                  <td className="px-4 py-2 text-center">
                                    <button
                                      onClick={() => confirm("Are you sure?") && deleteEvent(event._id)}
                                    className="px-4 py-[4px] bg-red-500 text-white rounded-md border-none cursor-pointer m-auto text-[16px]"
                                    >
                                    Delete
                                  </button>
                                </td>
                                </tr>
                              ))}
                          </tbody>
                          </table>
                        )}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-blue-500 text-white px-4 py-2 border-none rounded-md mt-4">
                        Prev
                      </button>
                      <p className="text-center w-12 h-2">{page}</p>
                      <button onClick={() => setPage(page + 1)} className="bg-blue-500 text-white px-4 py-2 border-none rounded-md mt-4">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      </main >
    </div >
  );
}

index.auth = {role: "admin"};

export default index;
