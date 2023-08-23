'use client'
import { createContext, useState } from "react";
export const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    const [customer, setCustomer] = useState({ name: '', email: '', contact: '', date:'' })
    const [totalAmount, setTotalAmount] = useState(0)
    const [tableData, setTableData] = useState([])
    const [applyDiscount, setApplyDiscount] = useState(0)
    const [discount, setDiscount] = useState(false)
    const [invoiceAmount , setInvoiceAmount] = useState(null)

    let current = 0
   current =  tableData.map((element, i) => {
        return parseInt(element.rate) * parseInt(element.quantity)
        // console.log("current", current);
    });


    const value = {
        totalAmount, setTotalAmount,
         tableData, setTableData,
          current, applyDiscount,
           setApplyDiscount,
           discount, setDiscount,
           customer, setCustomer, 
           invoiceAmount , setInvoiceAmount
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;