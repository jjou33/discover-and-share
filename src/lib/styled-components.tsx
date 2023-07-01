'use client'

import { ReactElement, ReactNode, useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export const useStyledComponentsRegistry = () => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  }

  const StyledComponentsRegistry = ({ children }: { children: ReactNode }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as ReactElement}
    </StyleSheetManager>
  )

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const
}
