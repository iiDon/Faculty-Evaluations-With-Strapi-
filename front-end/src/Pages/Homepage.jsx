import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="container pt-24 m-auto cursor-pointer">
        <div className=" bg-blue-200 rounded-lg p-7 shadow-lg">
          <div className="flex pb-4 just">
            <span>Icon</span>
            <h2 className="font-main pr-5 font-bold">سلطان السيف</h2>
            <h4 className="pr-40">التقييم: </h4>
          </div>
          <ul className="flex ">
            <li className="pl-20"><span className="font-bold">التخصص:</span> نظم المعلومات الإجارية</li>
            <li><span className="font-bold">المادة:</span> جافا </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
