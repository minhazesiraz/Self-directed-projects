import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Select from 'react-select';
import useEncoded from "../../../Hooks/useEncoded";

const designateStyles = {
   control: (base) => ({
      ...base,
      borderRadius: "0.25rem",
      borderColor: '#ccc',
      padding: '2px',
      boxShadow: 'none',
      '&:hover': {
         borderColor: '#888',
      },
   }),
   menu: (base) => ({
      ...base,
      borderRadius: "0.25rem",
   }),
   option: (base) => ({
      ...base,
      padding: '10px',
   }),
   singleValue: (base) => ({
      ...base,
      color: '#333',
   }),
};

const options = [
   { value: 'member', label: 'Member' },
   { value: 'administrator', label: 'Administrator' },
   { value: 'moderator', label: 'Moderator' },
];

const Roles = () => {
   const { _id, name, email, creationTime, lastSignInTime } = useLoaderData();
   const encoded = useEncoded();
   const [selectedOption, setSelectedOption] = useState(null);
   // console.log(selectedOption);

   const handleOnChange = (option) => {
      setSelectedOption(option);
   };

   const handleDesignate = () => {
      if (selectedOption) {
         encoded.patch(`/APIs/users/${_id}`, { role: selectedOption.value })
            .then(res => {
               console.log(res.data);
               if (res.data.modifiedCount > 0) {
                  alert(`${name} is now ${selectedOption.label}`);
               }
            })
      } else {
         // Handle case when no option is selected
         alert("Please select an option.");
      }
   }

   return (
      <>
         <div>
            {_id}
            {name}
            {email}
            {creationTime}
            {lastSignInTime}
         </div>
         <div className="grid grid-cols-7 gap-3">
            <div className="relative col-span-2">
               <Select
                  id="designate"
                  value={selectedOption}
                  onChange={handleOnChange}
                  options={options}
                  styles={designateStyles}
                  placeholder="Your choice"
               />
            </div>
            <button
               onClick={() => handleDesignate()}
               className="col-span-1 bg-sky-500 hover:bg-sky-600 rounded text-white"
            >Submit</button>
         </div>
      </>
   );
};

export default Roles;