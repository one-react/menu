# One React Component: menu

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/menu.svg)](https://travis-ci.org/one-react/menu)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/menu.svg)](https://circleci.com/gh/one-react/menu)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/menu.svg)](https://codecov.io/gh/one-react/menu) 
[![Version](https://img.shields.io/npm/v/or-menu.svg)](https://www.npmjs.com/package/or-menu)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/menu.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-menu

// with yarn
yarn add or-menu
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
import { Menu, MenuItem } from 'or-menu'
import React, { PureComponent } from 'react'

export default class Example extends PureComponent<{}, {}> {
  render() {
    return (
      <div className="example-wrapper">
        <Menu>
          <MenuItem subNav={subNav1}>MAKEUP</MenuItem>
          <MenuItem subNav={subNav2}>PERFUME</MenuItem>
          <MenuItem subNav={subNav1}>MAKEUP</MenuItem>
          <MenuItem subNav={subNav2}>CLOTHING</MenuItem>
          <MenuItem>NO-SUBNAV</MenuItem>
        </Menu>
      </div>
    )
  }
}

const subNav1 = (
  <div className="sub-nav-overlay">
    <div className="item-wrapper">
      <div className="title">FACE</div>
      <div>New Arrivals</div>
      <div>Foundation</div>
      <div>Concealer</div>
      <div>Blush</div>
      <div>Powder</div>
      <div>Primer</div>
    </div>
    <div className="item-wrapper">
      <div className="title">LIP</div>
      <div>Lipstick</div>
      <div>Liquid Lipcolor</div>
      <div>Lip Gloss</div>
      <div>Lip Pencil</div>
      <div>Matte Finish</div>
    </div>
    <div className="item-wrapper">
      <div className="title">COLLECTIONS</div>
      <div>New Arrivals</div>
      <div>Pure Color</div>
      <div>Poppy</div>
      <div>Suger</div>
      <div>Sunset Collection</div>
    </div>
    <div className="item-wrapper">
      <div
        className="image"
        style={{ backgroundImage: `url(${require('./images/face.png')})` }}
      />
    </div>
  </div>
)

const subNav2 = (
  <div className="sub-nav-overlay">
    <div className="item-wrapper">
      <div className="title">MEN</div>
      <div>Wood Sage & Sea Salt</div>
      <div>Orris & Sandalwood</div>
      <div>Lime Basil & Mandarin</div>
      <div>Amber & Lavender</div>
      <div>Pomegranate Noir</div>
    </div>
    <div className="item-wrapper">
      <div className="title">WOMEN</div>
      <div>English Pear</div>
      <div>Lime Basil</div>
      <div>Honeysuckle & Davana </div>
      <div>Red Roses</div>
      <div>Wild Bluebel</div>
    </div>
    <div className="item-wrapper">
      <div className="title">GIFTS</div>
      <div>Home Candle</div>
      <div>Deluxe Candle</div>
      <div>Cologne</div>
      <div>Grapefruit Candle</div>
    </div>
    <div className="item-wrapper">
      <div
        className="image"
        style={{ backgroundImage: `url(${require('./images/perfume.png')})` }}
      />
    </div>
  </div>
)

```

## API

MenuItem:

```ts
interface Props {
  /**
   * additional className for menuItem
   */
  className?: string

  /**
   * menuItem title
   */
  children: string

  /**
   * the sub-nav appears when the mouse moves over the menuItem title
   */
  subNav?: React.ReactElement<any>
}
```

Menu: 

```ts
interface Props {
  /**
   * additional className for menu
   */
  className?: string
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-menu can be overridden:

```scss
$or-menu-active-color: or-$gray8 !default;

$or-menu-border-width: $or-border-width !default;
...
```
For more variables, see [here](https://github.com/one-react/menu/blob/master/src/styles.scss).

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/menu)

## License

MIT &copy; foryuki
