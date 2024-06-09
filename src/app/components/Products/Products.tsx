// "use client";
// import { ClobalContext } from "@/app/context/Context";
// import React, { useContext } from "react";
// import Product from "../Product/Product";
// import Filter from "../Filter/Filter";

// const Products = () => {
//   const context = useContext(ClobalContext);
//   if (!context) return;
//   const { data } = context;


//   return (
//     <div className="mx-auto gap-[2%] flex flex-row items-center md:items-start mt-8 mb-10">
//       {/* <div className="hidden w-[25%] md:flex">
//         <h2 className="text-gray-400">{length} Results Found</h2>
//       </div> */}
//       <Filter />

//       <div className="w-full  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:w-[73%]  gap-x-4 gap-y-4">
//         {data.slice(0, 6).map((item, i) => (
//           <Product key={i} product={item} />
//         ))}

//         <img
//           src="/assets/Breadcrumbs.png"
//           alt=""
//           className="col-span-full shadow-md h-[15vh] mt-10 mb-10"
//         />

//         <div className="md:col-span-2">
//           {data.slice(6, 7).map((item, i) => (
//             <Product key={i} product={item} />
//           ))}
//         </div>

//         {data.slice(7, data.length).map((item, i) => (
//           <Product key={i} product={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Product from "../Product/Product";
import Filter from "../Filter/Filter";

const Products = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { data, value } = context;


  return (
    <div className="mx-auto gap-[2%] flex flex-row items-center md:items-start mt-8 mb-10">
      {/* <div className="hidden w-[25%] md:flex">
        <h2 className="text-gray-400">{length} Results Found</h2>
      </div> */}
      <Filter />

      <div className="w-full  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:w-[73%]  gap-x-4 gap-y-4">
        {data.filter((item) => item.price >= value[0] && item.price <= value[1]).slice(0, 6).map((item, i) => (
          <Product key={i} product={item} />
        ))}

        <img
          src="/assets/Breadcrumbs.png"
          alt=""
          className="col-span-full shadow-md h-[15vh] mt-10 mb-10"
        />

        <div className="md:col-span-2">
          {data.filter((item) => item.price >= value[0] && item.price <= value[1]).slice(6, 7).map((item, i) => (
            <Product key={i} product={item} />
          ))}
        </div>

        {data.filter((item) => item.price >= value[0] && item.price <= value[1]).slice(7, data.length).map((item, i) => (
          <Product key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
