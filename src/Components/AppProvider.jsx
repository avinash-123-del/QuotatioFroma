import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    const [selectedPrices, setSelectedPrices] = useState([]);
    const [item, setItem] = useState({ tax: '', discount: '' })

    const [input, setInput] = useState({ customerName: '', email: '', mobileNum: '', country: '', address: '', city: '', payment: '', price: selectedPrices })

    useEffect(() => {
        setInput(prevInput => ({
            ...prevInput,
            price: selectedPrices
        }));
    }, [selectedPrices]);

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input);
        console.log(item);
    }

    let billPrice = 0;
    let totalPrice = 0;

    if (selectedPrices.length >= 2) {
        console.log('haa');
        selectedPrices.forEach((e) => {
            billPrice += parseFloat(e.price);
        });

        let tax = parseFloat(item.tax) || 0;
        let discount = parseFloat(item.discount) || 0;

        totalPrice = billPrice;
        if (!isNaN(tax) && !isNaN(discount)) {
            totalPrice = totalPrice - discount;
            totalPrice = totalPrice + totalPrice * (tax / 100);
        }
    }


    const value = {
        selectedPrices, setSelectedPrices,
        handleSubmit, input,
        setInput, billPrice,
        item, setItem, totalPrice
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
