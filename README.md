# strassen-design-system

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to write the tags.json and attributes.json files
The `tags.json` and `attributes.json` files are used by Vetur to generate autocompletion when using the lib's components.

### Tags
The `tags.json` file describes what tags to suggest when the user is typing in a vue template, they should contain all the lib's components and their attributes. Each entry is structured like this:
```js
"ds-component-name": {
  "attributes": ["prop-1", "prop-2", "event-1"],
  "defaults": ["event-1"],
  "description": "Describes the component"
}
```
A brief explanation of the structure:
  - The **attributes** key is an array of all the component's props and events
  - The **defaults** key should contain the attributes that should be automatically written when the tag is autocompleted. This is useful for components with **required props** or **events that should always be listened to**.
  - The description is shown to the user when hovering over the autocomplete selection. It should briefly describe the component

### Attributes
The `attributes.json` file describes what attributes to suggest and how to autocomplete them. The attributes can be props or events from our custom components. Each entry is structured like this:
```js
"ds-component-name/attribute-name": {
  "description": "Describes the attribute",
  "type": "", // nullable, can be boolean/flag/method
  "options": ["option1", "option2"], // nullable
}
```

Some **title** examples:
- `DsButton` component with a `label` prop should be: **ds-button/label**
- `DsButton` component with a `click` event should be: **ds-button/click**
- Any component from the lib with a `required` prop should be: **required**

The **description** text should follow some general rules:
- When referring to a prop the description should describe what it controls/changes in the component, like:
```js
"ds-component-name/title": {
  "description": "Text shown at the top of the component",
  ...
},
```
- When referring to an event the description should be describe when the event is triggered, like:
 ```js
 "ds-component-name/close": {
   "description": "Triggered when the user clicks on the gray area",
   ...
 }
 ```
The description prop also controls the default value for the attribute, just append **", default: _value_"**, to the description, like this:
```js
"ds-component-name/type": {
  "options": ["primary", "success", "error"],
  "description": "The type of the component, default: primary"
},
```

The **type** should be one of the following:
- **Empty**, simply do not write the "type" key in the attribute object.
This indicates that either the attribute is a **text prop and has no autocomplete**, or
the attribute has an **options key that already exemplifies its possible values**

- **boolean**, used when the prop is a **Boolean and false by default**, so the presence of the tag means it's true. When autocompleting a boolean prop, no quotes will be opened, since there isn't an expected value, just the presence is enough.

- **flag**, like the boolean type, also used when the prop is a Boolean, but not neccessarily false by default. The difference is that when using **flag** the autocomplete opens quotes when triggered, but the boolean doesn't.

- **method**, used when the attribute is an event listener