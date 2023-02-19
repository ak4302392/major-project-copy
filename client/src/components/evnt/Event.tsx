import { Box, Typography } from '@mui/material';
import React from 'react';
// import Carousel from 'react-material-ui-carousel';

const items1 = [
  {
    name: 'Item 1',
    description: 'Description 1',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Item 2',
    description: 'Description 2',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Item 3',
    description: 'Description 3',
    image: 'https://via.placeholder.com/300',
  },
];
export default function Event() {
  return (
    <Box>
      <Box position='relative'>
        <Box
          width='100%'
          height='20rem'
          sx={{ backgroundColor: '#45B3D6', position: 'absolute', top: '5rem', zIndex: 1 }}
          px={[1, 2, 5, 10]}
          py={[1, 2, 4]}
        >
          <Typography variant='h6' color='white' textTransform='uppercase'>
            club overview
          </Typography>
        </Box>
        <Box
          position='absolute'
          sx={{
            backgroundColor: '#45B3D6',
            left: '70%',
            zIndex: 2,
            height: '50rem',
            width: '20rem',
          }}
          py={[1, 2, 4]}
          px={[1, 2, 5]}
        >
          <Typography variant='h5' color='white' textTransform='uppercase' textAlign='center'>
            roobaroo
          </Typography>
        </Box>
        {/* <Box
          mx={[1, 3, 5, 8]}
          position='absolute'
          sx={{ height: '5rem', width: '100%', top: '32rem', zIndex: 3 }}
        >
          <Carousel
            autoPlay={true}
            animation='slide'
            navButtonsAlwaysVisible={true}
            interval={2000}
            indicatorIconButtonProps={{
              style: {
                display: 'none',
              },
            }}
          >
            {items1.map((item, index) => (
              <div key={index}>
                <img style={{ height: '300px' }} src={item.image} alt={item.name} />
              </div>
            ))}
          </Carousel> */}
        {/* </Box> */}
      </Box>
    </Box>
  );
}
