import { mount } from 'enzyme'
import React from 'react'

import { MenuItem } from '../src'

describe('MenuItem', () => {
  it('should render properly', () => {
    const wrapper = mount(<MenuItem subNav={subNav}>MAKEUP</MenuItem>)
    expect(wrapper.find('.or-menu-item').length).toBe(1)
    expect(wrapper.find('.or-menu-item').text()).toBe('MAKEUP')
  })

  it('simulate mouse events with sub-nav', () => {
    const wrapper = mount(<MenuItem subNav={subNav}>MAKEUP</MenuItem>)

    wrapper.find('.or-menu-item').simulate('mouseEnter')
    expect(wrapper.find('.or-menu-item').hasClass('or-menu-item-active')).toBe(
      true
    )
    expect(wrapper.find('.or-sub-nav').length).toBe(1)
    expect(wrapper.find('.sub-nav-overlay').text()).toBe('New Arrivals')

    wrapper.find('.or-menu-item').simulate('mouseLeave')
    expect(wrapper.find('.or-menu-item').hasClass('or-menu-item-active')).toBe(
      false
    )
    expect(wrapper.find('.or-sub-nav').length).toBe(0)
  })

  it('simulate mouse events without sub-nav', () => {
    const wrapper = mount(<MenuItem>MAKEUP</MenuItem>)

    wrapper.find('.or-menu-item').simulate('mouseEnter')
    expect(wrapper.find('.or-menu-item').hasClass('or-menu-item-active')).toBe(
      true
    )
    expect(wrapper.find('.or-sub-nav').length).toBe(0)

    wrapper.find('.or-menu-item').simulate('mouseLeave')
    expect(wrapper.find('.or-menu-item').hasClass('or-menu-item-active')).toBe(
      false
    )
    expect(wrapper.find('.or-sub-nav').length).toBe(0)
  })
})

const subNav = (
  <div className="sub-nav-overlay">
    <div>New Arrivals</div>
  </div>
)
