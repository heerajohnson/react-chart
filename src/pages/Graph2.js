import React ,{useState} from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
import {Pie} from 'react-chartjs-2';

const state1 = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}



export default function Graph2() {
  const [value1,setValue1]=useState('select');
  let chart=null;

 
  if (value1 === 'pie chart'){
    chart=(    <Pie
      data={state1}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />

    );
  }
  if (value1 === 'line chart'){
    chart=(   <Line
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />

    );
  }
  if (value1 === 'bar chart'){
    chart=(    <Bar
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />

    );
  }
  
   
    return (
      <div>
      <header>
      <Navbar bg="light" expand="lg">
 
 
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
    
      
      <NavDropdown title={value1} id="basic-nav-dropdown">
      <NavDropdown.Item onClick={()=>setValue1('select')}>
          select
        </NavDropdown.Item>
      <NavDropdown.Item onClick={()=>setValue1('pie chart')}>
          Pie chart{''}
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=>setValue1('line chart')}>
          Line chart{''}
        </NavDropdown.Item>
        <NavDropdown.Item  onClick={()=>setValue1('bar chart')}>
          bar chart{''}</NavDropdown.Item>
       
       
   
      </NavDropdown>
    </Nav>
 
 
  </Navbar.Collapse>
</Navbar>
</header>
<div style={{width:'50%',height:'50%'}}>{chart}</div>
</div>
    
   
      // <ReactFusioncharts
      //   type="column2d"
      //   width="100%"
      //   height="100%"
      //   dataFormat="JSON"
      //   dataSource={dataSource}
      // />
    );
  
} 
   
  
  

 
  //   <div
  //   style={{
  //     backgroundColor: "white",
  //     textAlign: "center",
  //   }}
  // >
  //   <br />
  //   <h2> International Graphs</h2>
  //   <br />
    
    
 

  // import React from 'react';
  // import {Bar} from 'react-chartjs-2';
  
  // const state = {
  //   labels: ['January', 'February', 'March',
  //            'April', 'May'],
  //   datasets: [
  //     {
  //       label: 'Rainfall',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: [65, 59, 80, 81, 56]
  //     }
  //   ]
  // }
  
  // export default class App extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <Bar
  //           data={state}
  //           options={{
  //             title:{
  //               display:true,
  //               text:'Average Rainfall per month',
  //               fontSize:20
  //             },
  //             legend:{
  //               display:true,
  //               position:'right'
  //             }
  //           }}
  //         />
  //       </div>
  //     );
  //   }

