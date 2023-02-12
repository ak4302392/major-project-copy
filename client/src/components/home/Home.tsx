import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
// import { Carousel } from '@brainhubeu/react-carousel';

const news: string[] = [
  'Hello there how are you how is it going',
  'I am fine. check this out',
  'Hey there',
];

const items = [
  {
    title: 'Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Item 2',
    description: 'Suspendisse euismod magna vitae enim tincidunt, in malesuada tortor',
  },
  {
    title: 'Item 3',
    description: 'Aliquam et massa dictum, dictum augue vel, blandit velit',
  },
];

const useStyles = makeStyles({
  anchorTag: {
    color: 'white',
    '&: hover': {
      color: 'black',
    },
  },
});

export const HomePage = () => {
  const classes = useStyles();
  return (
    <Box px={[1, 3, 5, 7]} mt={[3, 4, 7]}>
      <Grid container sx={{ height: '300px' }}>
        <Grid item sm={12} md={8} sx={{ backgroundColor: '#45B3D6' }}>
          <Box p={[0.5, 1, 2]}>
            <Box mb={[1, 2]}>
              <Typography variant='h6' color='white'>
                NEWS HIGHLIGHTS
              </Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              {news.map((item) => {
                return (
                  <a href=''>
                    <Typography color='white' variant='subtitle1'>
                      {item}
                    </Typography>
                  </a>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} sx={{ backgroundColor: 'red' }}>
          Here
        </Grid>
      </Grid>

      <Box display='flex' flexDirection='column'>
        <Box my={[2]}>
          <Typography
            variant='body1'
            sx={{ color: ' #1E1E1E', fontWeight: '700', fontsize: '22px' }}
          >
            DOWN THE MEMORY LANE
          </Typography>
        </Box>
        <Box>
          {/* <Carousel
            slidesPerPage={1}
            slidesPerScroll={1}
            autoPlay={3000}
            animationSpeed={1000}
            // onChange={setValue}
            // value={value}
            centered
          >
            {items.map((item, index) => (
              <Paper key={index} style={{ padding: '2rem' }}>
                <Typography variant='h4'>{item.title}</Typography>
                <Typography variant='body1'>{item.description}</Typography>
              </Paper>
            ))}
          </Carousel> */}
        </Box>
      </Box>
    </Box>
  );
};
