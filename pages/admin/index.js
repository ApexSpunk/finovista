import React from "react";
import Home from "../../components/admin/Home";
import Navbar from "../../components/admin/Navbar";
import Topbar from "../../components/admin/Topbar";

function index() {
  return (
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
            <div className="flex flex-col flex-wrap sm:flex-row ">
              {/* <Home /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default index;
