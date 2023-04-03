import NextLink from 'next/link';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { paths } from '../../paths';

export const HomeHero = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      pt: '64px'
    }}
  >
    <Container
      maxWidth={false}
      sx={{ maxWidth: 700 }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: {
            xs: 38,
            md: 64
          },
          lineHeight: 1.2,
          fontWeight: 800,
          mb: 3
        }}
      >
        ApptBuddy -
        <br />
        Breathing fresh life into your practice
      </Typography>
      <Typography
  align="center"
  color="text.secondary"
  sx={{
    fontSize: {
      xs: 20,
      md: 24
    },
    lineHeight: 1.5,
    mb: 3
  }}
>
  ApptBuddy is the secure, compliant, and intuitive patient management system designed exclusively for medical professionals. With ApptBuddy, seamlessly manage your patients and stay ahead in today's fast-paced healthcare environment. 
</Typography>


      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
      >
        <Button
          color="inherit"
          component={NextLink}
          href={paths.dashboard.index}
          size="large"
          variant="outlined"
        >
          Login
        </Button>
        <Button
          component="a"
          href="https://mui.com/store/items/carpatin-dashboard"
          size="large"
          target="_blank"
          variant="contained"
        >
          Request a demo
        </Button>
      </Stack>
      <Box
        sx={{
          fontSize: 0,
          '& img': {
            width: '100%'
          }
        }}
      >
        <img src="/assets/home-hero.png" />
      </Box>
    </Container>
  </Box>
);
