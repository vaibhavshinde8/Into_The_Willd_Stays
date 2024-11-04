import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoPeople } from "react-icons/io5";

const propertiesData = [
    {
      name: 'Royal Cottage Villa',
      imgURL: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1674302928599.jpeg',
      price: 18000,
      location: 'Dehradun',
      bedroom: 4,
      bathroom: 2,
      guest: 6
    },
    {
      name: 'The Lalit Rooms & Spa',
      imgURL: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1674302928599.jpeg',
      price: 17000,
      location: 'Mussourie',
      bedroom: 4,
      bathroom: 2,
      guest: 6
    },
    {
      name: 'Blue Heaven Paradise',
      imgURL: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1674302928599.jpeg',
      price: 15000,
      location: 'Goa',
      bedroom: 4,
      bathroom: 2,
      guest: 6
    },
    {
      name: 'The Arindum Palace',
      imgURL: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1674302928599.jpeg',
      price: 12000,
      location: 'Manali'
    },
  ]

const Properties = ( {selectedLocation = 'All'} ) => {
    const filteredProperty = selectedLocation === 'All' ? propertiesData : propertiesData.filter(data => data.location === selectedLocation)

  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg my-6'>
        {filteredProperty.map((places) => (
            <div className='bg-blue-50 rounded-lg'>
                <img className='rounded-lg' src={places.imgURL} alt="" />
                <div className='p-2 lg:px-4'>
                    <h2 className='font-bold text-primary lg:text-xl'>{places.name}</h2>
                    <h3 className='flex gap-1 items-center'><span className='text-primary'><IoLocationOutline/></span>{places.location}</h3>
                    <div className='hidden lg:flex gap-2 mt-2'>
                        <h2 className='flex items-center gap-1 border-r-2 border-black px-2'><MdOutlineBedroomParent/>{places.bedroom} Bedrooms</h2>
                        <h2 className='flex items-center gap-1 border-r-2 border-black px-2'><MdOutlineBathroom/>{places.bathroom} Bathrooms</h2>
                        <h2 className='flex items-center gap-1 border-r-2 border-black px-2'><IoPeople/>{places.guest} Guests</h2>
                    </div>
                </div>
                <div className='p-2 lg:px-4 lg:flex lg:items-center lg:justify-between'>
                    <h4 className='text-lg'>From Rs. <span className='text-primary font-bold'>{places.price}</span>/Night</h4>
                    <button className='border-2 mt-2 text-primary border-primary px-2 lg:px-4 lg:text-lg hover:bg-primary hover:text-white rounded-lg font-bold'>Book Now</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Properties