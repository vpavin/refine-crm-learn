import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import React from 'react'

import { Header } from './header'

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Dashboard" />}
        >
        { children }
    </ThemedLayoutV2>
  )
}
