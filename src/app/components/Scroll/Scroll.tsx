import React from "react";
import ScrollToTop from "react-scroll-to-top";

// function Scroll() {



//   return (
//     <>
//       <div
//         style={{
//           marginTop: "150vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         //   color:'#008000'
//         }}
//         color='#008000'
//       />
//       <ScrollToTop smooth />
//     </>
//   );
// }


const Scroll = () => {
    return (
      <ScrollToTop
        smooth
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        color="#008000"
      />
    );
  };

export default Scroll;
