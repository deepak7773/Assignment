
import React, { useState } from 'react';

const Table = () => {
  const initialData = [
    { name: 'Banana'},
    { name: 'Apple'},
    { name: 'Orange'},
    { name: 'Mango'},
    { name: 'Pineapple'},
    { name: 'Watermelon'},
    

  
    
    // Add more data as needed
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>   
     <h1 style={{marginLeft:350}}>Serch Fruit</h1>
    <div style={{marginLeft:350}} className='mt-5' >
    <div className='container mt-5'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            
            <th style={{marginLeft:"150"}}>Name</th>&nbsp;
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              
              <td>{item.name}</td>&nbsp;&nbsp;&nbsp;
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>

  );
};

export default Table;