// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth_token_url: '/auth/mbpt/token',
  auth_revoke_token_url: '/auth/mbpt/revoke',
  auth_google_url: '/auth/google/url',
  announcement_url: 'http://localhost:8000/announcement/',
  challenge_url: 'http://localhost:8000/challenge/',
  discussion_url: 'http://localhost:8000/discussion/',
  profile_url: 'http://localhost:8000/profile/',
  user_url: 'http://localhost:8000/user/'
};
