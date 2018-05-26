import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import moment from 'moment';
import moment from 'moment-timezone';

import './styles/app.css';

// const Card = ({imgSrc, title,subTitle}) => {
//   return (

//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-4">
//           <div className="card text-center bg-light">
//               <div className="card-header">
//                 {title} Card
//               </div>
//               <img className="card-img-top" src={imgSrc} alt="Card image cap" />
//               <div className="card-body bg-white">
//                   <h5 className="card-title">{subTitle}</h5>
//                   <p className="card-text">
//                     Spitz are a type of domestic dog characterized by long, thick, and often white fur, and pointed ears and muzzles.
//                   </p>
//                   <a href="#" className="btn btn-primary">Go details</a>
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );

// };


// const App = () => {
//   return (
//     <div>
//       <div className="ui fixed inverted menu">
//         <div className="ui container">
//           <a href="#" className="header item">
//             My React App
//           </a>
//           <a href="#" className="item">Home</a>
//         </div>
//       </div>
//       <div className="ui container">
//         <h1 className="ui header">Hello World</h1>
//         <p>This is a basic fixed menu template using fixed size containers.</p>
//         <p>A text container is used for the main container, which is useful for single column layouts</p>
//       </div>
//     </div>
//   );
// };
// function MyClock(props){
//   return (
//     <div>

//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
// }
// setInterval(function(){
//   ReactDOM.render(
//     <MyClock title="shu"/>

//     , document.getElementById('root'));
// },1000);
// ReactDOM.render(
//   <h1>{new Date().toLocaleTimeString()}</h1>

//   , document.getElementById('root'));

function getTimeComponent(timeZone = 'Australia/Sydney') {
  const now = new moment().tz(timeZone);
  return {
    hours: now.format('HH'),
    minutes: now.format('mm'),
    seconds: now.format('ss'),
  };
}

function getTimeZone(city) {
  let cityName = '';
  if (city.includes(' ')) {
    cityName = city.split(' ').join('_');
  } else {
    cityName = city;
  }
  return moment.tz.names().find(z => z.toLowerCase().includes(cityName.toLowerCase()));
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.currentTimeZone = getTimeZone(this.props.city);
    this.state = {
      currentDate: moment().format('ddd MMM DD YYYY'),
      currentTime: getTimeComponent(this.currentTimeZone),
    };
  }
  componentWillMount() {

  }
  componentDidMount() {
    this.updateTime();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTime() {
    this.timer = setInterval(() => {
      this.setState({
        currentDate: moment().format('ddd MMM DD YYYY'),
        currentTime: getTimeComponent(this.currentTimeZone),

      });
    }, 1000);
  }
  render() {
    return (

      <div className="col-4">
        <div className="card text-center bg-orange box-shadow text-white">
          <div className="card-header line-dark">{this.state.currentDate}</div>
          <h5 className="card-title">{this.currentTimeZone}</h5>
          <div className="card-body">
            <div className="line-center">
              <span className="badge badge-darken">{this.state.currentTime.hours}</span> : <span className="badge badge-darken">{this.state.currentTime.minutes}</span> : <span className="badge badge-darken">{this.state.currentTime.seconds}</span>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

ReactDOM.render(
  // <Card imgSrc="../pics/dog.jpg" title="Cute Dog" subTitle="Spitz" />,
  <div className="Container">
    <div className="row justify-content-center">
      <Clock city="sydney" />
      <Clock city="london" />
    </div>
    <div className="row justify-content-center">
      <Clock city="seoul" />
      <Clock city="New York" />
    </div>
  </div>,

  document.getElementById('root'),
);
