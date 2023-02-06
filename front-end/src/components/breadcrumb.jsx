import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
//import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import "../styles/tile.css";
import { Link as RouterLink } from 'react-router-dom';
//import { withRouter } from "react-router-dom";
function Breadcrumb(props) {
  console.log(props);
  return (
    // <div>
    //   <div role="presentation">
    //     <Breadcrumbs aria-label="breadcrumb" className="font">
    //       <Link underline="hover" color="inherit">
    //         <label className="font">Home</label>
    //       </Link>
    //       <Link
    //         underline="hover"
    //         color="inherit"
    //       >
    //         <label className="font">Tiles</label>
    //       </Link>
    //       <Link
    //       underline="hover"
    //       color="inherit"
    //     >
    //        <label className="font">Add</label>
    //     </Link>
    //       <Typography color="text.primary">
    //         <label className="font">Add</label>
    //       </Typography>
    //     </Breadcrumbs>
    //   </div>
    // </div>
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" component={RouterLink} to="/">
      Home
    </Link>
    <Link color="inherit" component={RouterLink} to="/addtile">
      Add
    </Link>
  </Breadcrumbs>
  );
}
export default Breadcrumb;




// import React from "react";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// //import { Link } from 'react-router-dom';
// import Typography from "@mui/material/Typography";
// import "../styles/tile.css";

// export default function Breadcrumb() {
//   function handleClick(event) {
//     event.preventDefault();
//     console.info("You clicked a breadcrumb.");
//   }
//   return (
//     <div>
//       <div role="presentation" onClick={handleClick}>
//         <Breadcrumbs aria-label="breadcrumb" className="font">
//           <Link underline="hover" color="inherit" href="/">
//             <label className="font">Home</label>
//           </Link>
//           <Link
//             underline="hover"
//             color="inherit"
//             //href="/material-ui/getting-started/installation/"
//             href="http://localhost:3001"
//           >
//             <label className="font">Tiles</label>
//           </Link>
//           <Link
//           underline="hover"
//           color="inherit"
//           href="http://localhost:3001/addtile"
//         >
//            <label className="font">Add</label>
//         </Link>
//           {/* <Typography color="text.primary">
//             <label className="font">Add</label>
//           </Typography> */}
//         </Breadcrumbs>
//       </div>
//     </div>
//   );
// }
