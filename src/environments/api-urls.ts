/**
 * A catalog of all API urls used by the application. This object is merged
 * into the environment object and should never by imported/accessed directly
 * {} is a placeholder used in api's to interpolate variables in the urls.
 */
const host = 'http://127.0.0.1:5202';

export const api_urls = {
  users: {
    signIn: host + '/signin',
    getAllEmployees: host + '/getAllEmployees',
  },
} as const;
