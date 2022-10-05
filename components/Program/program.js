import React from "react";
import { useEffect, useState } from "react";
import SingleProgram from "./SingleProgram";
import ProgramSkeleton from "./ProgramSkeleton";


function Program() {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        setLoading(true);
        const getEvents = async () => {
            try {
                const cate = await fetch("/api/category");
                let cateRes = await cate.json();
                setCategories(cateRes.category);
                const response = await fetch("/api/programs");
                let ress = await response.json();
                setPrograms(ress.programs);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getEvents();
    }, []);

    return (
        <div>
            <div className="mb-32">
                <div className="text-center mt-12">
                    <div>
                        <h1 className="my-3">
                            Recent <span className="text-[#2067ff]">Programs</span>
                        </h1>
                        <div className="w-44 h-[3px] bg-[#2067ff] mx-auto mb-12"></div>
                    </div>
                </div>

                {loading ? (
                    <div className="skeleton">
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                        <ProgramSkeleton />
                    </div>
                ) : (
                    <div className="allBlogs">
                        {programs.map((program) => {
                            let category = categories.find(
                                (category) => category.category === program.category
                            );
                            return (
                                <SingleProgram
                                    key={program._id}
                                    blog={program}
                                    categoryColor={category ? category.categoryColor : "#2067ff"}
                                />

                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Program;
