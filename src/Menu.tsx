import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional className for menu
   */
  className?: string
}

export class Menu extends PureComponent<Props, {}> {
  render() {
    const { className, children } = this.props
    const menuClass = clx(className, 'or-menu')

    return (
      <div className={menuClass}>
        {React.Children.map(children, (menuItem: React.ReactElement<any>) => {
          return React.cloneElement(menuItem)
        })}
      </div>
    )
  }
}
