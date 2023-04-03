import NextLink from 'next/link';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { paths } from '../../paths';

const features = [
  'Adaptive',
  'Zero Lag',
  'Mission-critical speed',
  'Multi-layered',
  'Page consolidation'
];

export const HomeUserFlows = () => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.mode === 'dark'
        ? 'neutral.900'
        : 'neutral.50',
      py: '64px'
    }}
  >
    <Container maxWidth="lg">
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={3}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexBasis: 'auto',
            flexGrow: 0,
            maxWidth: '100%',
            width: 500
          }}
        >
          <div>
            <Typography
              sx={{ mb: 2 }}
              variant="h2"
            >
              Modern user flows
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              ApptBuddy's innovative dashboard offers medical professionals a modern and user-friendly experience. Rather than navigating through a complex array of tabs and pages, all of the necessary features are conveniently consolidated into a single, multi-layered page, allowing for seamless navigation between different sections. With lightning-fast loading times, even during the busiest periods, ApptBuddy's adaptive and intuitive design helps streamline your workflow and maximize efficiency, so you can spend more time providing top-quality care to your patients while your practice operations operate like clockwork in the background.
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              gap={2}
              sx={{ mb: 3 }}
            >
              {features.map((feature) => (
                <Chip
                  key={feature}
                  label={feature}
                />
              ))}
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Button
                color="inherit"
                component={NextLink}
                href={paths.dashboard.index}
                size="large"
                variant="outlined"
              >
                View the demo
              </Button>
              <Button
                component="a"
                href="https://mui.com/store/items/carpatin-dashboard"
                size="large"
                target="_blank"
                variant="contained"
              >
                Purchase
              </Button>
            </Stack>
          </div>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexBasis: 'auto',
            flexGrow: 0,
            maxWidth: '100%',
            width: 500,
            '& img': {
              width: '100%'
            }
          }}
        >
          <img src="/assets/home-flows.png" />
        </Box>
      </Stack>
    </Container>
  </Box>
);
