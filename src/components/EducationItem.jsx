import React from "react";

const EducationItem = ({
  year,
  title,
  major,
  minor,
  gpa,
  awards,
  location,
}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 mb-6">
      <li className="mb-6 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-[#001b5e] my-1">
              {title}
            </span>
            <span className="text-lg font-semibold text-[#001b5e] my-1">
              {location}
            </span>
            <span className="inline-block px-4 py-1 font-semibold text-white bg-[#001b5e] rounded-md max-w-[250px] my-1">
              {year}
            </span>
          </div>
        </div>
        <div className="mt-2">
          {major && <p className="my-1">Major: {major}</p>}
          {minor && <p className="my-1">Minor: {minor}</p>}
          {gpa && <p className="my-1">GPA: {gpa}</p>}
          {awards && <p className="my-1">Awards: {awards}</p>}
        </div>
      </li>
    </ol>
  );
};

export default EducationItem;
