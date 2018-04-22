// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth_token_url: '/auth/mbpt/token',
  auth_revoke_token_url: '/auth/mbpt/revoke',
  auth_google_url: '/auth/google/url',
  announcement_url: 'https://mbpt-api.herokuapp.com/announcement/',
  challenge_url: 'https://mbpt-api.herokuapp.com/challenge/',
  discussion_url: 'https://mbpt-api.herokuapp.com/discussion/',
  profile_url: 'https://mbpt-api.herokuapp.com/profile/',
  user_url: 'https://mbpt-api.herokuapp.com/user/',
  language_url: 'https://mbpt-api.herokuapp.com/lang/',
  submission_url: 'https://mbpt-api.herokuapp.com/challenge/submission/',
};
