import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'react-chartjs-2';
import ProgressBar from './ProgressBar';
import { Doughnut } from 'react-chartjs-2';

export default function MainMid() {

   const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Applications',
          data: [20, 45, 15, 65, 80, 75],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          { 
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
               display: true ,
               color: "#fff"
            },
          },
        ],
      },
    };


    const data2 = {
      labels: [
        '30%',
        '25%',
        '45%'
      ],
      datasets: [{
        label: 'Open Position by Department',
        data: [30, 25, 45],
        backgroundColor: [
          '#FF3D68',
          '#39A2DB',
          '#A239EA'
        ],
        hoverOffset: 4
      }]
    };

   return (
      <div className="main__mid">
         
         <div className="main__box main__box-1">
            <div className="main__box-title">
               <p className="main__p">Total Applications</p>
               <p className="main__p"><a href="#"><i class="fas fa-ellipsis-h"></i></a></p>
            </div>

            <div className="main__box-content">
               <div className="main__numbers">
                  <p className="main__number">7956</p>
                  <p className="main__percentage" style={{color: '#A239EA'}}><i class="fas fa-chart-line"></i> +3.59%</p>
               </div>
               <div className="main__circle" style={{ width: 60, height: 60 }}>
                  <CircularProgressbar value={70} text='+70%' styles={buildStyles({
                     pathColor: '#A239EA',
                     textColor: '#A239EA',
                     trailColor: '#d6d6d6'
                  })} />
               </div>
            </div>
         </div>

         <div className="main__box main__box-2">
            <div className="main__box-title">
               <p className="main__p">Shortlisted Candidates</p>
               <p className="main__p"><a href="#"><i class="fas fa-ellipsis-h"></i></a></p>
            </div>

            <div className="main__box-content">
               <div className="main__numbers">
                  <p className="main__number">4658</p>
                  <p className="main__percentage" style={{color: '#fff'}}><i class="fas fa-chart-line"></i> +06%</p>
               </div>
               <div className="main__circle" style={{ width: 60, height: 60 }}>
                  <CircularProgressbar value={60} text='+60%' styles={buildStyles({
                     pathColor: '#fff',
                     textColor: '#fff',
                     trailColor: 'rgba(250,250,250,0.4)'
                  })} />
               </div>
            </div>
         </div>

         <div className="main__box main__box-3">
            <div className="main__box-title">
               <p className="main__p">Total Applications</p>
               <p className="main__p"><a href="#"><i class="fas fa-ellipsis-h"></i></a></p>
            </div>

            <div className="main__box-content">
               <div className="main__numbers">
                  <p className="main__number">1501</p>
                  <p className="main__percentage" style={{color: '#FF3D68'}}><i class="fas fa-chart-line"></i> -04%</p>
               </div>
               <div className="main__circle" style={{ width: 60, height: 60 }}>
                  <CircularProgressbar value={40} text='+40%' styles={buildStyles({
                     pathColor: '#FF3D68',
                     textColor: '#FF3D68',
                     trailColor: '#d6d6d6'
                  })} />
               </div>
            </div>
         </div>

         <div className="main__graph-box">

            <div className="main__graph-title">
               <div><p className="main__p">Applications Received</p></div>
               <div>
                  <p className="main__graph-p"><a href="#">This Year</a></p>
                  <p className="main__graph-p"><a href="#">This Week</a></p>
                  <p className="main__graph-p"><a href="#">Today</a></p>
                  <p className="main__graph-p"><a href="#"><i class="fas fa-folder-plus"></i> Download Report</a></p>
                  <p className="main__graph-p"><a href="#"><i class="fas fa-ellipsis-v"></i></a></p>
               </div>
            </div>

            <div className="main__graph-graph">
               <Line data={data} options={options} />
            </div>
         </div>

         <div className="main__progress-box">
            <div className="main__progress-title">
               <p className="main__p">Total Applications</p>
            </div>

            <div className="main__progress-bar">
               <div>
                  <p>Applications</p>
                  <ProgressBar bgcolor={'rgb(230,230,230)'} completed={40} />
               </div>
               <div>
                  <p>Shortlisted</p>
                  <ProgressBar bgcolor={'#39A2DB'} completed={80} />
               </div>
               <div>
                  <p>Rejected</p>
                  <ProgressBar bgcolor={'#FF3D68'} completed={30} />
               </div>
               <div>
                  <p>On hold</p>
                  <ProgressBar bgcolor={'#f197ab'} completed={15} />
               </div>
               <div>
                  <p>Something</p>
                  <ProgressBar bgcolor={'#A239EA'} completed={85} />
               </div>
            </div>
         </div>

         <div className="main__refral-box">

            <div className="main__refral-title">
               <p className="main__p">Refrals and Campaign stats</p>
               <div className="main__refral-right">
                  <div className="main__refral-icon"><i class="fas fa-paper-plane"></i></div>
                  <div className="main__refral-right-text">
                     <p className="main__refral-red">40 Campaigns sent in total</p>
                     <p className="main__refral-text">4 Campaigns sent in last month</p>
                  </div>
               </div>
            </div>

            <div className="main__refral-grid">

               <div className="main__refral-grid-box">
                  <p className="main__refral-p">User's Reached</p>
                  <p className="main__percentage"><i class="fas fa-chart-line"></i> +3.59%</p>
                  <p className="main__number">7956</p>
               </div>

               <div className="main__refral-grid-box">
                  <p className="main__refral-p">Refrals</p>
                  <p className="main__percentage"><i class="fas fa-chart-line"></i> +9.0%</p>
                  <p className="main__number">0662</p>
               </div>

               <div className="main__refral-grid-box">
                  <p className="main__refral-p">Shares</p>
                  <p className="main__percentage"><i class="fas fa-chart-line"></i> +39.19%</p>
                  <p className="main__number">1478</p>
               </div>

               <div className="main__refral-grid-box">
                  <p className="main__refral-p">Applications</p>
                  <p className="main__percentage"><i class="fas fa-chart-line"></i> +12.00%</p>
                  <p className="main__number">0564</p>
               </div>

            </div>

            <div className="main__refral-btns">
               <a href="#" className="main__refral-btn" style={{background: '#39A2DB'}}>Start a New Campaign now</a>
               <a href="#" className="main__refral-btn" style={{background: '#FF3D68'}}>Pause All Running Campaign</a>
            </div>
         </div>

         <div className="main__pie">
            <div className="main__pie-title">
               <p className="main__pie-p">Open Position by Department</p>
               <p className="main__pie-p"><a href="#"><i class="fas fa-ellipsis-h"></i></a></p>
            </div>

            <div className="main__pie-graph">
               <Doughnut data={data2} />
            </div>
         </div>

      </div>
   )
}
