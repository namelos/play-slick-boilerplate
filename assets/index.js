import { test } from './test'

import React from 'react'
import { render } from 'react-dom'

test()

render(<h1>test</h1>, document.getElementById('app'))