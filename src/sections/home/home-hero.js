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
        If you're a medical professional looking for an intuitive and secure patient management system, ApptBuddy is here to serve.
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

        With its intuitive, user-friendly interface and compliance with industry regulations, ApptBuddy is the perfect instrument to efficiently manage your patients and stay one step ahead of the paperwork in today's fast-paced healthcare environment.
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
