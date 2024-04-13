import React from "react";

interface EducationProps {
  id: number;
  schoolName: string;
  year: string;
  subTitle: string;
  description: string;
}

const EducationTimeLine = ({
  educationDetails,
}: {
  educationDetails: EducationProps[];
}) => {
  return (
    <div className="w-full md:w-7/12 lg:6/12  relative ">
      <div className="border-l-2 mt-10">
        {educationDetails &&
          educationDetails?.length > 0 &&
          educationDetails?.map((detail, idx) => {
            return (
              <div
                key={idx}
                className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-800 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
              >
                <div className="w-5 h-5 bg-gray-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-slate-500 absolute -left-10 z-0"></div>

                <div className="flex flex-col w-full">
                  <div className="p-2">
                    <p className="text-lg">{detail?.schoolName}</p>
                  </div>
                  <div className="flex flex-col p-2 md:w-full md:flex-row md:items-center md:justify-between">
                    <p className="text-gray-300 text-base">{detail?.year}</p>
                    <p className="text-gray-300 text-base">
                      {detail?.subTitle}
                    </p>
                  </div>

                  <div className="p-2 text-gray-500 ">{detail?.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EducationTimeLine;
