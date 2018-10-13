import { mount } from 'enzyme'
import React from 'react'

import { Menu, MenuItem } from '../src'

describe('MenuItem', () => {
  it('should render properly', () => {
    const wrapper = mount(renderMenu())
    expect(wrapper.find('.or-menu').length).toBe(1)
    expect(wrapper.find('.or-menu-item').length).toBe(8)
  })

  it('simulate mouse events with sub-nav', () => {
    const wrapper = mount(renderMenu())
    wrapper
      .find('.or-menu-item')
      .at(0)
      .simulate('mouseEnter')
    expect(
      wrapper
        .find('.or-menu-item')
        .at(0)
        .hasClass('or-menu-item-active')
    ).toBe(true)
    expect(
      wrapper
        .find('.or-menu-item')
        .at(0)
        .find('.or-sub-nav').length
    ).toBe(1)
    expect(
      wrapper
        .find('.or-menu-item')
        .at(1)
        .hasClass('or-menu-item-active')
    ).toBe(false)

    wrapper
      .find('.or-menu-item')
      .at(0)
      .simulate('mouseLeave')
    expect(
      wrapper
        .find('.or-menu-item')
        .at(0)
        .hasClass('or-menu-item-active')
    ).toBe(false)
    expect(
      wrapper
        .find('.or-menu-item')
        .at(1)
        .hasClass('or-menu-item-active')
    ).toBe(false)
  })
})

const subNav = (
  <div className="sub-nav-overlay">
    <div>New Arrivals</div>
  </div>
)

function renderMenu() {
  return (
    <Menu>
      <MenuItem subNav={subNav}>MAKEUP</MenuItem>
      <MenuItem subNav={subNav}>PERFUME</MenuItem>
      <MenuItem subNav={subNav}>HANDBAGS</MenuItem>
      <MenuItem subNav={subNav}>ACCESSORIES</MenuItem>
      <MenuItem subNav={subNav}>MAKEUP</MenuItem>
      <MenuItem subNav={subNav}>CLOTHING</MenuItem>
      <MenuItem subNav={subNav}>HANDBAGS</MenuItem>
      <MenuItem>NO-SUBNAV</MenuItem>
    </Menu>
  )
}
