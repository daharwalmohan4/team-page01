import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./App.css";

const universities = [
  "Harvard University",
  "Stanford University",
  "Oxford University",
  "Columbia University",
  "Stanford University",
  "University Cambridge",
  "University Tokyo",
  "University Chicago",
  "Imperial College London",
  "Princeton University",
  "Yale University",
  "Columbia University"
];

const mentors = [
  "Subhaam",
  "Mentor 2",
  "Mentor 3",
  "Mentor 4",
  "Mentor 5",
  "Mentor 6",
  "Mentor 7",
  "Mentor 8",
  "Mentor 9",
  "Mentor 10",
  "Mentor 11",
  "Mentor 12",
];

const Adviser = [
  "Dr. Omkar, Principal, Project Scientist, IIT Madras",
  "Akhil Tripathi",
  "Vivek Dwivedi",
];

const App = () => {
  return (
    <div className='container'>
      <div className='heading'>
        <h1 className='h1'>Team Page</h1>
        <h2 className='h1'>Learn from Scientists, research scholars from the top institutes in the world</h2>
      </div>
      <div className='card-container'>

      {/* Generate university cards */}
        {universities.map((universitie, index) => (
          <Card key={index} className='card'>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {universitie}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Mentor section */}
      <div className='Mentor'>
        <h1>Meet Your Mentors</h1>
        <div className='card-container'>
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className='card'
            >
              <Box sx={{ position: 'relative' }}>
                <img
                  src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg"
                  alt="mentor"
                  width={"100px"}
                />
                <Typography variant="subtitle1">
                  {mentor}
                  <br />
                  Combrize University, UK
                </Typography>
              </Box>
            </Card>
          ))}
        </div>
      </div>
      {/* Mentor & Advisor section */}
      <div>
           <div>
        <h1>Mentor & Advisor</h1>
        <div className='card-container1'>
          {Adviser.map((adviser, index) => (
            <Card
              key={index}
              className='card1'
            >
              <Box>
                <img
                  src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg"
                  alt="advisor"
                  width={"100px"}
                />
                <CardContent>
                <Typography variant="subtitle1">
                  {adviser}
                  <br />
                </Typography>
                </CardContent>
                {index >= 1 && ( // Display button for the last two advisers
                  <button className="message-button">
                    message him now
                  </button>
                )}
              </Box>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
