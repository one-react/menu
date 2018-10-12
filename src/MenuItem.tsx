import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional classname for menuItem
   */
  classname?: string

  children: string

  subNav: React.ReactElement<any>
}

export class MenuItem extends PureComponent<Props, {}> {
  state = {
    active: false
  }

  render() {
    const { classname, children, subNav } = this.props
    const menuClass = clx(
      {
        'or-menu-item-active': this.state.active
      },
      classname,
      'or-menu-item'
    )

    return (
      <div
        className={menuClass}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="or-menu-item-name">{children}</div>
        {this.state.active && <div className="or-sub-nav">{subNav}</div>}
      </div>
    )
  }

  handleMouseEnter = () => {
    this.setState({
      active: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      active: false
    })
  }
}
