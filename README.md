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

<h1>Warning Container</h1>
