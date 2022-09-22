import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function index() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all the events froma api

  const fetchPrograms = async () => {
    setLoading(true);
    try {
      const res = await fetch("../../api/programs");
      const programs = await res.json();
      setPrograms(programs.programs);
      setLoading(false);
      console.log(programs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // delete an event

  const deleteProgram = async (id) => {
    try {
      const res = await fetch("../../api/programs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      console.log(data);
      fetchPrograms();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Programs</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program._id}>
                  <td>{program.title}</td>
                  <td>
                    <a href={`/admin/programs/edit/${program.slug}`}>Edit</a>
                  </td>
                  <td>
                    <button onClick={() => deleteProgram(program._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default index;
