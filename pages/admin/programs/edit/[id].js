import Head from "next/head";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddMedia from "../../../../components/AddMedia";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const ReactDOMServer = require("react-dom/server");
const HtmlToReactParser = require("html-to-react").Parser;

const htmlToReactParser = new HtmlToReactParser();

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

function editProgram({ program }) {
  const router = useRouter();

  const editor = null;
  const [content, setContent] = useState("");

  let config = {
    zIndex: 0,
    readonly: false,
    activeButtonsInReadOnly: ["source", "fullsize", "print", "about", "dots"],
    toolbarButtonSize: "middle",
    theme: "default",
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    width: "auto",
    height: 1600,
    minHeight: 100,
    direction: "",
    language: "auto",
    debugLanguage: false,
    i18n: "en",
    tabIndex: -1,
    toolbar: true,
    enter: "P",
    useSplitMode: false,
    colors: {
      greyscale: [
        "#000000",
        "#434343",
        "#666666",
        "#999999",
        "#B7B7B7",
        "#CCCCCC",
        "#D9D9D9",
        "#EFEFEF",
        "#F3F3F3",
        "#FFFFFF",
      ],
      palette: [
        "#980000",
        "#FF0000",
        "#FF9900",
        "#FFFF00",
        "#00F0F0",
        "#00FFFF",
        "#4A86E8",
        "#0000FF",
        "#9900FF",
        "#FF00FF",
      ],
      full: [
        "#E6B8AF",
        "#F4CCCC",
        "#FCE5CD",
        "#FFF2CC",
        "#D9EAD3",
        "#D0E0E3",
        "#C9DAF8",
        "#CFE2F3",
        "#D9D2E9",
        "#EAD1DC",
        "#DD7E6B",
        "#EA9999",
        "#F9CB9C",
        "#FFE599",
        "#B6D7A8",
        "#A2C4C9",
        "#A4C2F4",
        "#9FC5E8",
        "#B4A7D6",
        "#D5A6BD",
        "#CC4125",
        "#E06666",
        "#F6B26B",
        "#FFD966",
        "#93C47D",
        "#76A5AF",
        "#6D9EEB",
        "#6FA8DC",
        "#8E7CC3",
        "#C27BA0",
        "#A61C00",
        "#CC0000",
        "#E69138",
        "#F1C232",
        "#6AA84F",
        "#45818E",
        "#3C78D8",
        "#3D85C6",
        "#674EA7",
        "#A64D79",
        "#85200C",
        "#990000",
        "#B45F06",
        "#BF9000",
        "#38761D",
        "#134F5C",
        "#1155CC",
        "#0B5394",
        "#351C75",
        "#733554",
        "#5B0F00",
        "#660000",
        "#783F04",
        "#7F6000",
        "#274E13",
        "#0C343D",
        "#1C4587",
        "#073763",
        "#20124D",
        "#4C1130",
      ],
    },
    colorPickerDefaultTab: "background",
    imageDefaultWidth: 300,
    removeButtons: [],
    disablePlugins: [],
    extraButtons: [],
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    sizeSM: 400,
    buttons: [
      "source",
      "|",
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "image",
      "video",
      "table",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "copyformat",
      "|",
      "symbol",
      "fullsize",
      "print",
      "about",
    ],
    buttonsXS: [
      "bold",
      "image",
      "|",
      "brush",
      "paragraph",
      "|",
      "align",
      "|",
      "undo",
      "redo",
      "|",
      "eraser",
      "dots",
    ],
    events: {},
    textIcons: false,
  };

  const [programid, setProgramid] = useState("");
  const [programTitle, setProgramTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(
    "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
  );
  const [slug, setSlug] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const fetchCategories = async () => {
    const res = await fetch("/api/programcategory");
    const cate = await res.json();
    setCategories(cate.category);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProgram = async () => {
    setLoading(true);
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return null;
      try {
        const res = await fetch(`/api/singleProgram?slug=${id}`);
        const data = await res.json();
        setProgramid(data.programs[0]._id);
        setProgramTitle(data.programs[0].title);
        setThumbnail(data.programs[0].thumbnail);
        setSlug(data.programs[0].slug);
        setContent(data.programs[0].content);
        setCategory(data.programs[0].category);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    fetchProgram();
  }, [router.isReady]);

  function handleClick() {
    setShowModal(!showModal);
  }

  async function updateProgram() {
    const reactElement = htmlToReactParser.parse(content);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    try {
      const programData = {
        id: programid,
        programTitle,
        pageContent: reactHtml,
        thumbnail,
        slug,
        category,
      };
      let response = await fetch(`../../../api/programs`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(programData),
      });
      let responseData = await response.json();
      toast.success(`Program ${programTitle} Updated`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error(`Slug Already Exist Please Check The URL`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const uploadThumbnail = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/images", {
      method: "POST",
      body,
    });
    let ress = await response.json();
    setThumbnail(ress.data.Location);
  };

  const deleteProgram = async () => {
    try {
      let response = await fetch(`../../../api/programs`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: programid }),
      });
      let responseData = await response.json();
      toast.error(`Program ${programTitle} Deleted`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/admin/programs");
    } catch (error) {
      console.log(error);
    }
  };

  function handleTitleInput(programTitle) {
    setProgramTitle(programTitle);
    programTitle = programTitle.split(" ");
    programTitle = programTitle.join("-").toLowerCase();
    setSlug(programTitle);
  }

  return (
    <div>
      <div className="bg-[#f8f9fb]">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <div className="bg-gray-100">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="grid grid-cols-12 gap-6 font-[Poppins] pt-8 w-[95%] mx-auto">
            <div className="col-span-9">
              <div>
                <input
                  type="text"
                  value={programTitle}
                  onChange={(eve) => {
                    setProgramTitle(eve.target.value);
                  }}
                  className="font-[Poppins] w-full p-2 rounded-lg border text-xl box-border"
                  placeholder="Programs Title"
                  onBlur={(cou) => {
                    handleTitleInput(cou.target.value);
                  }}
                />
                <div className="flex justify-between">
                  <h4 className="font-[500] my-2">
                    Permalink: &nbsp;<a href="#">{slug}</a>
                  </h4>
                  <button onClick={handleClick}>Add Media</button>
                </div>
              </div>
              <JoditEditor
                ref={editor}
                value={content}
                tabIndex={500}
                config={config}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </div>
            <div className="col-span-3">
              <div className="bg-white p-4 rounded-xl">
                <div>
                  <h4>Publish</h4>
                  <hr />
                </div>
                <div className="grid mt-4 text-center">
                  <p className="py-2">status: {"published"}</p>
                  <p className="py-2">visibility: {"public"}</p>
                  {/* Delete Post Button with fontAwseome Icon*/}
                  <button
                    onClick={deleteProgram}
                    className="rdBtn flex justify-center content-center gap-2"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} height="20px" /> Delete
                  </button>
                </div>
                <div className="grid mt-4  gap-2">
                  <button className="previewBtn w-full" onClick={updateProgram}>
                    Update Program
                  </button>
                  <Link href="/admin/programs">
                    <button className="redBtn w-full">Cancel</button>
                  </Link>
                </div>
              </div>
              {/* <div className="bg-white p-4 mt-4 rounded-xl">
                <div>
                  <h4>Event Details</h4>
                  <hr />
                </div>
                <div className="grid mt-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      Event Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={location}
                      onChange={(loc) => setLocation(loc.target.value)}
                      placeholder="Event Location"
                      id="location"
                      className="p-[6px] w-full rounded-md border pl-3 text-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm text-gray-600">From Date</label>
                      <input
                        type="date"
                        value={fromDate}
                        onChange={(loc) => setFromDate(loc.target.value)}
                        className="p-[6px] w-full rounded-md border pl-3 text-lg"
                      />{" "}
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">To Date</label>
                      <input
                        type="date"
                        value={toDate}
                        onChange={(loc) => setToDate(loc.target.value)}
                        className="p-[6px] w-full rounded-md border pl-3 text-lg"
                      />{" "}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm text-gray-600">From Time</label>
                      <input
                        type="time"
                        value={fromTime}
                        onChange={(loc) => setFromTime(loc.target.value)}
                        className="p-[6px] w-full rounded-md border pl-3 text-lg"
                      />{" "}
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">To Time</label>
                      <input
                        type="time"
                        value={toTime}
                        onChange={(loc) => setToTime(loc.target.value)}
                        className="p-[6px] w-full rounded-md border pl-3 text-lg"
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 ">Event Type</label>
                    <select
                      name=""
                      id=""
                      value={eventType}
                      onChange={(loc) => setEventType(loc.target.value)}
                      className="p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg"
                    >
                      <option value="">Select Type</option>
                      <option value="internal">Internal</option>
                      <option value="external">External</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Select Mode</label>
                    <select
                      name=""
                      id=""
                      value={eventMode}
                      onChange={(loc) => setEventMode(loc.target.value)}
                      className="p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg"
                    >
                      <option value="">Select Mode</option>
                      <option value="in-person">In-person</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="virtual">Virtual</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 mt-4 rounded-xl">
                <div>
                  <h4>Registration Form List</h4>
                  <div>
                    <div
                      className={
                        "flex flex-wrap optionList mt-4 " + optionClass
                      }
                      id={optionClass}
                    >
                      {optionsArr.map((option, k) => {
                        return (
                          <div
                            key={k}
                            className=" bg-blue-400 m-1 w-fit rounded-3xl pl-2  text-white"
                          >
                            {option}
                            <button
                              className="border-none bg-transparent rounded-3xl text-white bg-blue-400 h-8 w-8 font-bold text-md hover:bg-blue-600 cursor-pointer"
                              onClick={() => {
                                let newArr = [...optionsArr];
                                newArr.splice(k, 1);
                                setOptionsArr(newArr);
                              }}
                            >
                              X
                            </button>
                          </div>
                        );
                      })}
                      <check className="w-full flex">
                        <div className=" bg-blue-400 m-1 w-fit rounded-3xl  text-white block">
                          <button
                            className="border-none bg-transparent rounded-3xl text-white bg-red-500 text-2xl h-8 w-8 hover:bg-red-600 cursor-pointer"
                            onClick={() => {
                              setOptionsArr([
                                "sal",
                                "firstName",
                                "lastName",
                                "email",
                                "secondEmail",
                                "phone",
                                "tel",
                                "designation",
                                "organizationName",
                                "organizationType",
                                "sector",
                                "subSector",
                                "subSector2",
                                "country",
                                "state",
                                "city",
                                "website",
                                "organizationProfile",
                                "remark1",
                                "remark2",
                                "remark3",
                              ]);
                              setOptionClass("");
                            }}
                          >
                            &#8634;
                          </button>
                        </div>
                        <div className=" bg-blue-400 m-1 w-fit rounded-3xl  text-white block">
                          <button
                            className="border-none bg-transparent rounded-3xl text-white bg-green-500 text-2xl h-8 w-8 hover:bg-green-600 cursor-pointer "
                            onClick={() => {
                              setOptionClass("optionSel");
                            }}
                          >
                            &#10004;
                          </button>
                        </div>
                      </check>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="bg-white p-4 mt-4 rounded-xl">
                <div>
                  <h4>Program Category</h4>
                  <div>
                    <select
                      name=""
                      id=""
                      onChange={(loc) => {
                        setCategory(loc.target.value);
                      }}
                      className="p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg mt-3"
                      value={category}
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => {
                        return (
                          <option value={cat.category} key={cat._id}>
                            {cat.category}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 mt-4 rounded-xl">
                <div>
                  <h4>Add Thumbnail</h4>
                  <div>
                    <img src={thumbnail} alt="" className="w-full" />
                    <input
                      name="myImage"
                      onChange={uploadThumbnail}
                      className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl my-2 text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full"
                      type="file"
                      accept="image/*"
                    />
                    <button
                      className=" border-0 rounded-3xl uppercase text-md bg-blue-700 text-white font-semibold cursor-pointer my-2 w-full p-3"
                      type="submit"
                      onClick={uploadToServer}
                    >
                      Upload Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddMedia handleClick={handleClick} showModal={showModal} />
    </div>
  );
}

export default editProgram;
