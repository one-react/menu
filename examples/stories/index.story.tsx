import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MenuItem } from 'or-menu'
import { previewCode } from './util'

import Example from './example'

import './styles.scss'

storiesOf('or-menu', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [MenuItem],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('example', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
