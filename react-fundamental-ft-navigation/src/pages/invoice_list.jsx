import React, { useState } from "react";
import Invioce from "./invoiceform";
import { Link, NavLink } from "react-router-dom";
import involist from "./data";


import { GrFormAdd,GrFormNext} from "react-icons/gr";
import {FaCircle} from "react-icons/fa";

const List_invoice = (props)=>{


        
    
        const [onpenform,setOpenForm] = useState(false);
        function hundleclick(){
          console.log('clicked')
          setOpenForm(prevopenForm =>!prevopenForm)
        }
     

          return(

          <div className="container-invo">
           {onpenform &&<Invioce/>}
          <div className="con-invo">
            <div className="titles"> 
              <div className="titles-1">
          <h1>List of Invoice</h1>
          <h4>There are 7 total invoice</h4>
          </div>
          <div className="titles-x"><h3 className="titles-x-h3">Filter by status</h3></div>
          <div className="addnew"><button onClick={hundleclick} className="add"><GrFormAdd className="rFormAdd"/><h4>New Invoice</h4></button>
          </div>
          </div>
         
          <div>
            
       <div>
        {involist.map((post, index) => {
          return (
            <>
              <div>
             
              <div className="con2-data">
              <Link  className="con2-data-l" to={`/invoice_list/${post.id}`}>
                <div>
              <p className="big">qww{ post.id}</p>
              </div>
              <div>
              <p>{post.invoice_date}</p>
              </div>
              <div>
            <p>{post.client_name}</p>
            </div>
            <div>
            <p className="big">${post.total}</p>
            </div>
            <div>
            <p className={`text ${post.payment_terms.toLowerCase()}`}><span><FaCircle/></span>&nbsp;{post.payment_terms}</p>
            </div>
            <div className={`icon`}><GrFormNext/></div></Link>
    </div>
              </div>
            </>
          );
        })}
        </div>
                              </div>
                              
          </div>
</div>
          );
          
};
export default List_invoice;