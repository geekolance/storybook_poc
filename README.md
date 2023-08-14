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

<h1>Components usage</h1>

  > import {componentName} from 'storybook_package_name/dist'

<h2>Button</h2>

- variant (String)
  - primary1 (default)
  - primary2
  - primary3
  - secondary1
  - secondary2
  - secondary3
  - Black1
  - Black2
  - Black3
  - smallSecondary1
  - smallSecondary2
  - smallSecondary3
- icon (Image object)

<h2>Calendar</h2>

- onChange (method to receive the value changed)
- Will be adding props to disable the dates.

<h2>Checkbox</h2>

- label (String)
- Icon (Image object (png, svg, jpg etc))
- onChange (function)

<h2>Dropdown</h2>

- onChange (function)
- placeholder (String)
- multiSelect (Boolean True/False) (False by default)
- Items (should be a array of key value pairs as following)

  ```
  [
    {
      value: 'One',
      label: 'One'
    },
    {
      value: 'Two',
      label: 'Two'
    },
    {
      value: 'Three',
      label: 'Three'
    },
    {
      value: 'Four',
      label: 'Four'
    },
    {
      value: 'Five',
      label: 'Five'
    }
  ]
  ```

<h2>Homepage nav</h2>

- title (String)
- icon (Image object)
- label (String)
- variant (String)
  - primary (default)
  - secondary

<h2>Infopill</h2>

- text (String)
- variant (String)
  - primary (default)
  - color
  - default
- icon (image object)

<h2>InfoContainer</h2>

- text (String)
- icon (image object)

<h2>OrderContainer</h2>

- variant
  - progress
  - scheduled
  - ready
- header (String) (required for all three variants)
- pickupAddress (String) (required for all three variants)
- Progress (String) (required for all three variants)
- delivery (String) (Not required for scheduled)
- deliveryInfo (String) (Required only for scheduled variant)

<h2>SideMenuItem</h2>

- label (String)
- variant (String)
  - filled
  - normal
  - disabled