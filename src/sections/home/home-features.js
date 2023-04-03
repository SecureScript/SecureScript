import ArrowDownOnSquareIcon from '@heroicons/react/24/outline/ArrowDownOnSquareIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const HomeFeatures = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      py: '120px'
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={6}>
        <Stack spacing={1}>
          <Typography
            align="center"
            variant="h2"
          >
            Packed with features
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
          >
            Automated appointment reminders, Recall management, Mass Mailer, Virtual waiting room, Revenue optimisation and so much more.
            All seamlessly available in a beautiful, intuitive interface. We also incorporate the latest AI and machine learning technologies to optimise your workflow.
          </Typography>
        </Stack>
        <div>
          <Grid
            container
            spacing={3}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                flexWrap={{
                  xs: 'wrap',
                  md: 'nowrap'
                }}
                gap={3}
                sx={{
                  backgroundColor: (theme) => theme.palette.mode === 'dark'
                    ? 'neutral.900'
                    : 'neutral.50',
                  borderRadius: '10px',
                  p: 3
                }}
              >
                <Box
                  sx={{
                    fontSize: 0,
                    '& img': {
                      maxHeight: 350,
                      width: '100%'
                    }
                  }}
                >
                  <img src="/assets/home-features-auth.png" />
                </Box>
                <Stack
                  justifyContent="center"
                  spacing={1}
                >
                  <Typography variant="h4">
                    Security as standard
                  </Typography>
                  <Typography color="text.secondary">
                    You're automatically covered by the latest security standards even from the most basic licence. 
                    We use the latest encryption technologies to ensure your patient's data is safe and secure, we're GDPR compliant and we're ISO 27001 certified - leaving you safe in the knowledge that your data is protected by the best industry standards.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.mode === 'dark'
                    ? 'neutral.900'
                    : 'neutral.50',
                  borderRadius: '10px',
                  p: 6
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    fontSize: 0,
                    justifyContent: 'center',
                    mb: 3,
                    overflow: 'hidden',
                    '& img': {
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      boxShadow: 16,
                      maxWidth: '100%',
                      width: 360
                    }
                  }}
                >
                  <img src="/assets/home-features-states.png" />
                </Box>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h5"
                >
                  Patient Ping
                </Typography>
                <Typography color="text.secondary">
                  Included in all plans. Book your patient in and they'll be automatically reminded of their appointment via SMS or email at intervals you pre-define.
                </Typography>
              </Box>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.mode === 'dark'
                    ? 'neutral.900'
                    : 'neutral.50',
                  borderRadius: '10px',
                  p: 6
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    fontSize: 0,
                    justifyContent: 'center',
                    mb: 3,
                    overflow: 'hidden',
                    '& img': {
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      boxShadow: 16,
                      maxWidth: '100%',
                      width: 360
                    }
                  }}
                >
                  <img src="/assets/home-features-filters.png" />
                </Box>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h5"
                >
                  Seamless Database Integration
                </Typography>
                <Typography color="text.secondary">
                  We use Supabase to provide a seamless database integration. This means you can use your existing database and we'll automatically sync your data with our platform. This will all be handled by your account manager.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            sx={{
              mb: 8,
              mt: 6
            }}
          />
          <Grid container>
            <Grid
              xs={12}
              md={6}
              sx={{
                borderRight: (theme) => ({
                  md: `1px solid ${theme.palette.divider}`
                })
              }}
            >
              <Box
                sx={{
                  pl: 2,
                  pr: {
                    xs: 2,
                    md: 5
                  },
                  py: 2
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: 'warning.main',
                    color: 'warning.contrastText',
                    height: 64,
                    width: 64
                  }}
                >
                  <SvgIcon fontSize="large">
                    <Squares2X2Icon />
                  </SvgIcon>
                </Avatar>
                <Typography
                  sx={{ my: 1 }}
                  variant="h5"
                >
                  Responsive
                </Typography>
                <Typography color="text.secondary">
                  Fully responsive surgery management panel that works on all devices. Customise your dashboard to suit your needs with the power of next.js 
                  {'\n'}
                  We offer a choice of themes and colour palettes to suit your brand and we are more than happy to discuss whitelabel customisation options to add a personal touch to your patient facing portal.
                </Typography>
              </Box>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <Box
                sx={{
                  pl: {
                    xs: 2,
                    md: 5
                  },
                  pr: 2,
                  py: 2
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: 'success.main',
                    color: 'success.contrastText',
                    height: 64,
                    width: 64
                  }}
                >
                  <SvgIcon fontSize="large">
                    <ArrowDownOnSquareIcon />
                  </SvgIcon>
                </Avatar>
                <Typography
                  sx={{ my: 1 }}
                  variant="h5"
                >
                  Free Updates
                </Typography>
                <Typography color="text.secondary">
                  We continuously deploy new updates which include updated dependencies,
                  new screens and bug fixes. We also provide a changelog via push notifications so you can see what's changed.
                  You will always be on the bleeding edge of technology, standards and security without having to lift a finger.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Container>
  </Box>
);
