import {
  Avatar,
  avatarClasses,
  AvatarGroup,
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

const members = [
  {
    avatar: '/assets/support-stefania.png',
    name: 'Stefania Vladutu'
  },
  {
    avatar: '/assets/support-alexandru.png',
    name: 'Alexandru Comanescu'
  },
  {
    avatar: '/assets/support-adrian.png',
    name: 'Adrian Manea'
  }
];

export const HomeSupport = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      pt: '120px'
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.900'
            : 'neutral.50',
          borderColor: 'divider',
          borderRadius: 2,
          borderStyle: 'solid',
          borderWidth: 1
        }}
      >
        <Grid
          container
          sx={{
            pb: {
              xs: 3,
              md: 6
            },
            pt: {
              xs: 3,
              md: 8
            },
            px: {
              xs: 3,
              md: 8
            }
          }}
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              borderRight: (theme) => ({
                md: `1px solid ${theme.palette.divider}`
              }),
              display: 'flex',
              flexDirection: 'column',
              mb: {
                xs: 4,
                md: 0
              },
              pr: {
                md: 4
              }
            }}
          >
            <Stack
              spacing={1}
              sx={{
                flexGrow: 1,
                mb: 4
              }}
              >
              <Typography variant="h4">
                Modular licencing
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
              >
                ApptBuddy is a highly modular platform, leaving you the option to pick and choose the features you feel would benefit your practice the most, while trimming the fat on the features you don&apos;t.
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
              >
                Boasting a wide range of features specifically tailored and created with medical professionals in mind, ApptBuddy is the perfect solution for any practice.
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              gap={3}
              justifyContent="space-between"
            >
              <Button
                component="a"
                href="https://www.figma.com/file/xEAerPeQsTKImIS28QulSh"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                View modules
              </Button>
              <Stack
                alignItems="center"
                direction="row"
                spacing={3}
                sx={{
                  '& img': {
                    flexShrink: 0
                  }
                }}
              >
                <img src="/assets/logos/logo-react.svg" />
                <img src="/assets/logos/logo-typescript.svg" />
                <img src="/assets/logos/logo-figma.svg" />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pl: {
                md: 4
              }
            }}
          >
            <Stack
              spacing={1}
              sx={{
                flexGrow: 1,
                mb: 4
              }}
            >
              <Typography variant="h4">
                Premium Support
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
              >
                From the moment you sign up, you&apos;ll be assigned a dedicated support specialist who will be there to answer any questions you may have, and help you get the most out of ApptBuddy.
                </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
              >
                From onboarding to seamlessly integrating ApptBuddy into your practice's existing systems, we&apos;re here to help.
                </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
              >
                Need a custom bespoke feature? We&apos;ll work with you to make it happen - our full team front and back end developers are at your disposal.
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              gap={3}
              justifyContent="space-between"
            >
              <Button
                component="a"
                href="mailto:securescriptsolutions@proton.me"
                target="_blank"
              >
                Contact us
              </Button>
              <AvatarGroup
                sx={{
                  [`& .${avatarClasses.root}`]: {
                    borderColor: (theme) => theme.palette.mode === 'dark'
                      ? 'neutral.900'
                      : 'neutral.50'
                  }
                }}
              >
                {members.map((member) => (
                  <Avatar
                    key={member.name}
                    src={member.avatar}
                  />
                ))}
              </AvatarGroup>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>
);
