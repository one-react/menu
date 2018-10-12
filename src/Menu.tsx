import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional classname for menu
   */
  classname?: string
}

export class Menu extends PureComponent<Props, {}> {
  render() {
    const { classname, children } = this.props
    const menuClass = clx(classname, 'or-menu')

    return (
      <div className={menuClass}>
        {React.Children.map(children, (menuItem: React.ReactElement<any>) => {
          return React.cloneElement(menuItem)
        })}
      </div>
    )
  }
}
