import { api_urls } from './api-urls';

/** Application configuration for a default (development) environment. */
export const environment = {
  production: false,
  applicationName: 'SprintPark Website',
  contactUsEmail: 'admin@gmail.com',
  admissionsEmail: 'admissions@gmail.com',
  ...api_urls,
};
