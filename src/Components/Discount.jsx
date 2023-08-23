import React, { useContext, useState } from 'react';
import { AppContext } from './ContextProvider';
import { VscClose } from 'react-icons/vsc';

const Discount = () => {
    const { applyDiscount, setApplyDiscount, discount, setDiscount } = useContext(AppContext);
    const [selectedButtonId, setSelectedButtonId] = useState(null);

    const dis = [
        {
            id: 0,
            coupon: 'DIS5',
            details: 'get 5% discount',
            value: 0.05
        },
        {
            id: 1,
            coupon: 'DIS10',
            details: 'get 10% discount',
            value: 0.10
        },
        {
            id: 2,
            coupon: 'DIS20',
            details: 'get 20% discount',
            value: 0.20
        },
    ];

    const handleDiscount = (id, value) => {
        setApplyDiscount(value);
        setSelectedButtonId(id);
    };

    console.log('value', applyDiscount);

    return (
        <div>
            <div className='flex flex-col justify-center items-start gap-8 discount-btn'>
                <div className='text-lg font-semibold text-gray-800 flex justify-between items-center w-[80%]'>
                    <h1>Set Discount</h1>
                    <span><VscClose size={25} onClick={() => setDiscount(!discount)} /></span>
                </div>
                {dis.map((e) => (
                    <button
                        key={e.id}
                        onClick={() => handleDiscount(e.id, e.value)}
                        className={`${selectedButtonId === e.id ? 'bg-[#00b800]' : 'bg-[#424242]'}`}
                    >
                        {e.coupon}<span>{e.details}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Discount;
