<h1>Design system using storybook and Rollupjs</h1>

1. Clone the application
2. Install the packages

  > npm install

3. To Start the storybook

  > npm run storybook

4. Make the changes and export them in index.js
5. change the application version in package.json file
6. Make the build using rollup.js the bundler that helps to make the minified     version of the application and distribute the reactjs application as a distributable package

  > npm run build-lib

7. Upload the build to git

  > npm --allow-same-version version 0.1.6 -m "Bump version to: %s [skip ci]"

8. Login with npm in your command prompt

  > npm add user

9. Add the GitHub token and npm token in the .env file
10. publish the package

  > npm publish

<h1>How to initialize</h1>
<h1>Why Rollup js</h1>

<h1>How to use the package that is published on npm</h1>

1. install the package.

  > npm install ak_storybook_poc

2. import the package in the js file

  > import { Button } from 'ak_storybook_poc'

3. You can customise the component with the custom css