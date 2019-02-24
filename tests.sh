  cd test/e2e/project
  # this is not necessary for the e2e test but we make sure generate works
  npm run generate
  # this is the dev version that is tested
  npm run dev &
  cd -
  npm run e2e