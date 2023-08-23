import React, { useContext, useState } from 'react';
import { AppContext } from './AppProvider';
import { useNavigate } from 'react-router-dom';

const Services = () => {

  // const [item , setItem] = useState({tax:'', discount:''})



  const { selectedPrices, setSelectedPrices,
    services , setServices, handleSubmit, 
    billPrice, item, totalPrice, setItem } = useContext(AppContext)

const nav = useNavigate()

  const handleCheckboxChange = (isChecked, itemId, price, data) => {
    if (isChecked) {
      setSelectedPrices([...selectedPrices, { itemId, price }]);
      setServices([...services, data]); 

    } else {
      setSelectedPrices(selectedPrices.filter(item => item.itemId !== itemId));
      setServices(services.filter(service => service.id !== data.id));
    }
  };

  console.log('services',services);

  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value })
  }


  const tableData = [
    {
      id: 1,
      Services: 'Arabian Horse',
      Price: '52.00',
    },
    {
      id: 2,
      Services: 'Farrier For Horse',
      Price: '5000.00',
    },
    {
      id: 3,
      Services: 'Jumping Training For Horse',
      Price: '5000.00',
    },
    {
      id: 4,
      Services: 'FarrierFarrierFarrier',
      Price: '499.00',
    },
    {
      id: 5,
      Services: 'Racing',
      Price: '5000.00',
    },
  ];

  return (
    <div className='mb-[50px]'>
      <div>
        <h3 className='text-lg font-bold text-start ml-9 '>Services</h3>
      </div>
      <table className='text-center w-full mt-[20px]'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Services</th>
            <th>Price</th>
            <th>Select Services</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(data => (
            <tr key={data.id}>
              <td className='p-2 border-4 border-stone-100'>{data.id}</td>
              <td>{data.Services}</td>
              <td>{data.Price}</td>
              <td>
                <input
                  type="checkbox"
                  className='mt-4'
                  onChange={(e) => handleCheckboxChange(e.target.checked, data.id, data.Price , data)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className='flex flex-col justify-end items-end mt-[30px] gap-2' >
        <div>
          <label htmlFor="" className='font-semibold'>Price</label>
          <p className='w-[250px] text-base py-2 border rounded-md px-3 h-10 border-gray-500'>{billPrice === 0 ? '' : billPrice}</p>
        </div>

        <div className='flex flex-col justify-start items-start'>
          <label htmlFor="" className='font-semibold'>Discount</label>
          <input type="text"
            className='w-[250px] text-base py-2 border rounded-md px-3 h-10 border-gray-500 '
            name='discount'
            required
            placeholder='Ex. 1000Rs.'
            value={item.discount}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col justify-start items-start'>
          <label htmlFor="" className='font-semibold'>Tax</label>
          <input type="text"
            className='w-[250px] text-base py-2 border rounded-md px-3 h-10 border-gray-500 '
            name='tax'
            required
            placeholder='Ex. 10%'
            value={item.tax}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="" className='font-semibold'>Total Price</label>
          <p className='w-[250px] text-base py-2 border rounded-md px-3 h-10 border-gray-500'>{totalPrice === 0 ? '' : totalPrice}</p>
        </div>
      </form>


      <div className='flex justify-center items-center'>

      <button type='submit'
          className={`hover:scale-110 duration-300 ${selectedPrices.length <= 1 ? 'bg-gray-600' : 'bg-[#727000] '} py-1 px-2 rounded-md text-stone-100`}
          disabled={selectedPrices.length <= 1 ? true : false} onClick={(e) => {handleSubmit(e); nav('/quotation')}}>CREATE</button>

      </div>

    </div>
  );
};

export default Services;
