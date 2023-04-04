export const paths = {
  index: '/',
  auth: {
    supabase: {
      login: '/auth/supabase/login',
      register: '/auth/supabase/register'
    }
  },
  dashboard: {
    index: '/dashboard',
    account: {
      index: '/dashboard/account',
      notifications: '/dashboard/account/notifications'
    },
    calendar: '/dashboard/calendar',
    components: {
      cardHeadings: '/dashboard/components/card-headings',
      dataStates: '/dashboard/components/data-states',
      imageUploader: '/dashboard/components/image-uploader',
      lists: '/dashboard/components/property-lists',
      onboarding: '/dashboard/components/onboarding',
      pageHeadings: '/dashboard/components/page-headings',
      stats: '/dashboard/components/stats'
    },
    customers: {
      index: '/dashboard/customers',
      details: {
        index: '/dashboard/customers/:customerId',
        orders: '/dashboard/customers/:customerId/orders',
        activity: '/dashboard/customers/:customerId/activity'
      }
    },
    foundation: {
      blank: '/dashboard/foundation/blank-page',
      buttons: '/dashboard/foundation/buttons',
      colors: '/dashboard/foundation/colors',
      inputs: '/dashboard/foundation/inputs',
      shadows: '/dashboard/foundation/shadows',
      tables: '/dashboard/foundation/tables',
      typography: '/dashboard/foundation/typography'
    },
    invoices: {
      index: '/dashboard/invoices',
      create: '/dashboard/invoices/create',
      details: {
        index: '/dashboard/invoices/:invoiceId',
        preview: '/dashboard/invoices/:invoiceId/preview'
      }
    },
    organization: {
      index: '/dashboard/organization',
      team: '/dashboard/organization/team',
      billing: '/dashboard/organization/billing'
    },
    orders: {
      index: '/dashboard/orders',
      details: '/dashboard/orders/:orderId'
    },
    products: {
      index: '/dashboard/products',
      details: {
        index: '/dashboard/products/:productId',
        inventory: '/dashboard/products/:productId/inventory',
        insights: '/dashboard/products/:productId/insights'
      }
    },
    sales: '/dashboard/sales'
  },
  docs: {
    analytics: {
      configuration: '/docs/analytics-configuration',
      eventTracking: '/docs/analytics-event-tracking',
      introduction: '/docs/analytics-introduction'
    },
    auth: {
      firebase: '/docs/auth-firebase',
    },
    changelog: '/docs/changelog',
    contact: '/docs/contact',
    dependencies: '/docs/dependencies',
    deployment: '/docs/deployment',
    environmentVariables: '/docs/environment-variables',
    gettingStarted: '/docs/getting-started',
    guards: {
      auth: '/docs/guards-auth',
      guest: '/docs/guards-guest',
      roleBased: '/docs/guards-role-based'
    },
    furtherSupport: '/docs/further-support',
    internationalization: '/docs/internationalization',
    redux: '/docs/redux',
    routing: '/docs/routing',
    rtl: '/docs/rtl',
    serverCalls: '/docs/server-calls',
    settings: '/docs/settings',
    theming: '/docs/theming',
    welcome: '/docs/welcome'
  }
};
