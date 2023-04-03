import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import XCircleIcon from '@heroicons/react/24/outline/XCircleIcon';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

const modularFeatures = [
  'Pay per module',
  'Ticket based support',
  '6 months of support',
  'Seamless integration with your existing patient data'
];

const standardFeatures = [
  'Pay per module',
  'Premium support',
  'Includes "SmartSurgery" modules',
  'Unlimited updates',
  'Seamless integration with your existing patient data'
];

const premiumFeatures = [
  'Premium support',
  'Includes "SmartSurgery" modules',
  'Includes all features',
  'Unlimited updates',
  'Seamless integration with your existing patient data',
  'Dedicated Manager',
  'Commercial applications'
];

const plans = [
  {
    name: 'Modular',
    features: modularFeatures
  },
  {
    name: 'Standard',
    features: standardFeatures
  },
  {
    name: 'Premium',
    features: premiumFeatures
  }
];

export const HomePricing = () => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.mode === 'dark'
        ? 'neutral.900'
        : 'neutral.50',
      py: 15
    }}
  >
    <Container maxWidth="xl">
      <Typography
        align="center"
        sx={{ mb: 8 }}
        variant="h2"
      >
        Pricing
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {plans.map((plan) => (
          <Grid
            xs={12}
            md={4}
            key={plan.name}
          >
            <Card
              elevation={16}
              sx={{ p: 3 }}
            >
              <Typography
                color="text.disabled"
                variant="overline"
              >
                License
              </Typography>
              <Typography variant="h4">
                {plan.name}
              </Typography>
              <List
                sx={{
                  flexGrow: 1,
                  px: 1,
                  py: 2
                }}
              >
                {plan.features.map((feature) => {
                  const isIncluded = true;

                  return (
                    <ListItem
                      disableGutters
                      key={feature}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 'auto',
                          mr: 1.5,
                          color: isIncluded ? 'success.main' : 'text.disabled'
                        }}
                      >
                        <SvgIcon fontSize="small">
                          {isIncluded ? <CheckCircleIcon /> : <XCircleIcon />}
                        </SvgIcon>
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          sx: { color: isIncluded ? 'text.primary' : 'text.disabled' },
                          variant: 'subtitle2'
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 2
                }}
              >
                <Button
                  component="a"
                  href="https://mui.com/store/items/carpatin-dashboard"
                  size="large"
                  target="_blank"
                >
                  Purchase Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
  sx={{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    mt: 8,
    textAlign: 'center',
  }}
>
  <Typography
    color="primary"
    variant="h3"
  >
    Do you have a special case?
  </Typography>
  <Typography
    color="text.secondary"
    sx={{ my: 2 }}
  >
    We are always open to discussing custom solutions. Take advantage of our professional, full-time development team that would love to work with you and create bespoke features like custom modules, integrations and features.
  </Typography>
  <Button
    component="a"
    href="https://devias.io/contact"
    size="large"
    target="_blank"
    variant="contained"
  >
    Contact us
  </Button>
</Box>

    </Container>
  </Box>
);
