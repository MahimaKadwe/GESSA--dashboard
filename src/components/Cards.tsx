// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
// import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
// import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
// import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

// function Cards(): JSX.Element {

//   return (
//     <>
//       <Card style={{ width: '19rem' }}>
//         <Card.Body>
//           <Card.Title>21 </Card.Title>
//           <FactCheckIcon className="first" />
//           <Card.Subtitle className="mb-2 text-muted"> Total Surveys</Card.Subtitle>
//           <Card.Text />
//         </Card.Body>
//       </Card>

//       <Card style={{ width: '19rem' }}>
//         <Card.Body>
//           <Card.Title>3</Card.Title>
//           <HourglassTopOutlinedIcon className="rin" />
//           <Card.Subtitle className="mb-2 text-muted"> Ongoing Surveys</Card.Subtitle>
//           <Card.Text />
//         </Card.Body>
//       </Card>

//       <Card style={{ width: '19rem' }}>
//         <Card.Body>
//           <Card.Title>8</Card.Title>
//           <div className="bod">
//             <CalendarMonthRoundedIcon className="first" />
//           </div>
//           <Card.Subtitle className="mb-2 text-muted"> Draft Surveys</Card.Subtitle>
//           <Card.Text />
//         </Card.Body>
//       </Card>

//       <Card style={{ width: '19rem' }}>
//         <Card.Body>
//           <Card.Title>10</Card.Title>
//           <CheckCircleOutlineRoundedIcon className="second" />
//           <Card.Subtitle className="mb-2 text-muted"> Completed Surveys</Card.Subtitle>
//           <Card.Text />
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// export default Cards;

// import React from 'react';

// interface CardProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const Card: React.FC<CardProps> = ({ title, description, image }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} />
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import FactCheckIcon from '@mui/icons-material/FactCheck';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     {/* <div className='fact'> */}
//     <CardContent className='fact'>
//     <FactCheckIcon className='first'> </FactCheckIcon> 
//        <h3>21</h3> 
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         <h5> Total Surveys </h5>
//       </Typography>
//       <Typography variant="body2">
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small"></Button>
//     </CardActions>
//     {/* </div> */}
//   </React.Fragment>
// );


import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function OutlinedCard() {
  return (
    <div className='cardcontainer'>
    
<div className='card'>
  {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
  <div className='card-content'>
  <FactCheckIcon className='first'> </FactCheckIcon> 
    <h3 className="carnum"> 21 </h3>
    <p>Total Surveys </p>
    {/* <a href="#" className='button'>Learn More</a> */}
  </div>
</div>

<div className='card'>
  {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
  <div className='card-content'>
  <HourglassTopOutlinedIcon className='rin'> </HourglassTopOutlinedIcon> 
    <h3 className="carnum"> 21 </h3>
    <p>Ongoing Surveys </p>
    {/* <a href="#" className='button'>Learn More</a> */}
  </div>
</div>

<div className='card'>
  {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
  <div className='card-content'>
  <CalendarMonthRoundedIcon className='first'> </CalendarMonthRoundedIcon> 
    <h3 className="carnum"> 21 </h3>
    <p>Draft Surveys </p>
    {/* <a href="#" className='button'>Learn More</a> */}
  </div>
</div>

<div className='card'>
  {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
  <div className='card-content'>
  <CheckCircleOutlineRoundedIcon className='first'> </CheckCircleOutlineRoundedIcon> 
    <h3 className="carnum"> 21 </h3>
    <p>Completed Surveys </p>
    {/* <a href="#" className='button'>Learn More</a> */}
  </div>
</div>
</div>
  );
}



