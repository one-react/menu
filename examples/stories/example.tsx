import { Menu, MenuItem } from 'or-menu'
import React, { PureComponent } from 'react'

const subNav = (
  <div className="">
    <div>123</div>
    <div>345</div>
    <div>2345</div>
  </div>
)
export default class Example extends PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem subNav={subNav}>MAKEUP</MenuItem>
          <MenuItem subNav={subNav}>CLOTHING</MenuItem>
          <MenuItem subNav={subNav}>HANDBAGS</MenuItem>
        </Menu>
      </div>
    )
  }
}
