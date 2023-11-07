

import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Layout from "./components/Layout";
import Invoice from "./pages/invoiceform";
import List_invoice from './pages/invoice_list';
import InvoDitail from "./pages/invoditail";
import "./App.css";
import "./styles/nav.css";
import "./styles/listofinvo.css"
import "./styles/ditail.css"
import "./styles/form.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
    
        <Routes>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<List_invoice/>} />
           
            <Route path="invoice_list" element={<List_invoice/>} />
            <Route path="invoice_list/:id" element={< InvoDitail/>} />
            <Route path="invoiceform" element={< Invoice/>} />
     
            <Route
              path="*"
              element={
                <>
                  <h1>Page not Found</h1>
                  <Link to={"/"}>Back to home</Link>
                </>
              }
            />
          </Route>
          {/* Home  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
