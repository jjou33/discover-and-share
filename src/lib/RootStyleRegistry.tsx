'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode } from 'react'

import { useStyledComponentsRegistry } from '$/styled-components'

export const RootStyleRegistry = ({ children }: { children: ReactNode }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry()

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>)

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
