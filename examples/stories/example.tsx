import { Menu, MenuItem } from 'or-menu'
import React, { PureComponent } from 'react'

export default class Example extends PureComponent<{}, {}> {
  render() {
    return (
      <div className="example-wrapper">
        <Menu>
          <MenuItem subNav={subNav1}>MAKEUP</MenuItem>
          <MenuItem subNav={subNav2}>PERFUME</MenuItem>
          <MenuItem subNav={subNav3}>HANDBAGS</MenuItem>
          <MenuItem subNav={subNav4}>ACCESSORIES</MenuItem>
          <MenuItem subNav={subNav1}>MAKEUP</MenuItem>
          <MenuItem subNav={subNav2}>CLOTHING</MenuItem>
          <MenuItem subNav={subNav3}>HANDBAGS</MenuItem>
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
      <div className="image image-1" />
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
      <div className="image image-2" />
    </div>
  </div>
)

const subNav3 = (
  <div className="sub-nav-overlay">
    <div className="item-wrapper">
      <div className="title">TOTES</div>
      <div>New Arrivals</div>
      <div>Foundation</div>
      <div>Concealer</div>
      <div>Blush</div>
      <div>Powder</div>
      <div>Primer</div>
    </div>
    <div className="item-wrapper">
      <div className="title">SATCHES</div>
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
      <div className="image image-3" />
    </div>
  </div>
)

const subNav4 = (
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
      <div className="image image-4" />
    </div>
  </div>
)
