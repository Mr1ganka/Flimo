import "./paging.css"

import React from 'react'
import { Pagination } from "@mui/material";
//import { SecurityUpdateGood } from "@mui/icons-material";

const Paging = ({setPage,numOfPages=10}) => {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    };

  return (
    <div className="paging">
        <Pagination color="primary" count={numOfPages}
     onChange={(e)=> handlePageChange(e.target.textContent)} />
     </div>
  )
}

export default Paging;