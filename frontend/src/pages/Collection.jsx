import React, { useState } from "react";
import { assets } from "../assets/assets";

const Collection = () => {
  const [showFilter, setShowFilter ] = useState(true);
  return (
    <div className="flex flex-col sm:flex-row max-w-[1000px] mx-auto my-14">
      {/* lef side */}
      <div className="flex flex-col gap-10 min-w-60">
        <p  className=" flex items-center text-2xl font-semibold">FILTERS
        <img   src={assets.dropdown_icon} className={`h-3 sm:hidden font-semibold mx-3 transition ease-in-out ${ showFilter ? 'rotate-90' : ''} `} onClick={()=>setShowFilter(!showFilter)} />
        </p>
        <div
          className={`border pr-32 border-gray-400 p-3 ${
            showFilter ? '' : "hidden"
          } sm:block `}
        >
          <p className="text-xl pb-1">CATEGORIES</p>
          <p>
            <input type="checkbox" className="mr-3 capitalize font-semibold" />
            men
          </p>
          <p>
            <input type="checkbox" className="mr-3 capitalize font-semibold" />
            Women
          </p>
          <p>
            <input type="checkbox" className="mr-3 capitalize font-semibold" />
            kids
          </p>
        </div>

        <div
          className={`border border-gray-400 p-3 ${
            showFilter ? "block" : "hidden"
          } sm:block `}
        >
          <p className="text-xl pb-1">TYPE</p>
          <p>
            <input type="checkbox" className="mr-3 capitalize font-semibold" />
            TopWear
          </p>
          <p>
            <input type="checkbox" className="mr-3 capitalize font-semibold" />
            BottomWear
          </p>
          <p>
            <input type="checkbox" className="mr-3 capitalize font-semibold" />
            WinterWear
          </p>
        </div>
      </div>
      {/* right side */}

    </div>
  );
};

export default Collection;
