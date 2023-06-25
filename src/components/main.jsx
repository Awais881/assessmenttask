import React, { useState } from 'react';
import './main.css';
import Image from '../img/Vector 1.png';
import Image1 from '../img/Vector (1).png';
import Image2 from '../img/Vector.png';
import Image3 from '../img/img.png';
const Main = () => {
  const [chats, setChats] = useState([
    { id: 1, name: 'Current requests' },
    { id: 2, name: 'Ongoing stays' },
    { id: 3, name: 'Previous stays' },
    { id: 4, name: 'Reports' },
  ]);

  return (
    <div className="container">
      <div className="sidebar">
        <h2>LODGN</h2>
        <ul>
          {chats.map((chat, index) => (
            <React.Fragment key={chat.id}>
              <li>
                <a href="#">{chat.name}</a>
              </li>
              {index !== chats.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </ul>

        <div className="sidebar-footer">
          <button className="logout-btn">Log - Out</button>
          <p>Help-Desk:</p>
          <p>786-874 9988</p>
        </div>
      </div>

      <div className="main-content">
        <div className='content-1'>
         You currently have 3 requests
       </div>
      

<div className='content-2'>
<table>
  <thead>
    <tr>
      <th>St Judes Hospital</th>
      <th className='border'>10  &nbsp; &nbsp; &nbsp; - &nbsp;   &nbsp; 17</th>

      <th  className='border-left'>20 Rooms</th>
    </tr>
  </thead>
  <tbody>
    <tr className='tdd'>
      <td>Sarasota,FL. 33178</td>
      <td className='border'> October    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;December</td>
   
      <td className='border-left'>10 Singles, 10 doubles</td>

    </tr>
   
  </tbody>
  
</table>
   
        <div className="new-table-container">
 <tr className='new-table'>
        <td>RECEIVED</td>
        <td className='second-td'>NEGOTIATING</td>
        <td>COMPLETED</td>
    </tr>
    </div>
</div>

       <div className='content-3'>
       <table>
  <thead>
    <tr>
      <th>St Judes Hospital</th>
      <th className='border'>10  &nbsp; &nbsp; &nbsp; - &nbsp;   &nbsp; 17</th>

      <th  className='border-left'>20 Rooms</th>
    </tr>
  </thead>
  <tbody>
    <tr className='tdd'>
      <td>Sarasota,FL. 33178</td>
      <td className='border'> October    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;December</td>
   
      <td className='border-left'>10 Singles, 10 doubles</td>

    </tr>
   
  </tbody>
  
</table>

<div className='btn'>
    <button>COMPLETED</button>
    </div>

    <div className='card-conatiner'>
   
      <div className='card' >
    <button className='sticky-btn'>Rare Find </button>
     
     
        <img src={Image} alt=""  className='sp'/>
        <p>Holiday Inn</p>
        
       
        <div className = "inner-card">
        <span className='text'>1.5 miles away from joblocation. </span>
           <div className='text'>
            <span>Singles: $120 <br /> Doubles: $145</span>
            <button>Book now</button>
           </div>
        </div>
      </div>
   
      <div className='card' >
        <center>
        <img src={Image} alt="" />
        <p>Holiday Inn</p>
        
        </center>
        <div className = "inner-card">
        <span className='text'>1.5 miles away from joblocation. </span>
           <div className='text'>
            <span>Singles: $120 <br /> Doubles: $145</span>
            <button>Book now</button>
           </div>
        </div>
      </div>

      <div className='card' >
        <center>
        <img src={Image} alt="" />
        <p>Holiday Inn</p>
        
        </center>
        <div className = "inner-card">
        <span className='text'>1.5 miles away from joblocation. </span>
           <div className='text'>
            <span>Singles: $120 <br /> Doubles: $145</span>
            <button>Book now</button>
           </div>
        </div>
      </div>
    </div>
    <br />
 
    <img src={Image3} alt=""  className='chat'/>

       </div>


       {/* <div className='chat'>
      <img src={Image2} alt="" />
      <img src={Image1} alt="" />
       </div> */}

    
      </div>
 
    </div>
    
  );
};

export default Main;
