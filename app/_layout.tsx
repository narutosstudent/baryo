import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { Stack } from 'expo-router'
import { COLORS } from '../constants'

const theme = extendTheme({
  colors: {
    brown: COLORS.brown,
    pink: COLORS.pink,
    red: COLORS.red,
    orange: COLORS.orange,
  },
})

type CustomTheme = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomTheme {}
}

export default function Layout() {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack initialRouteName="/auth" />
    </NativeBaseProvider>
  )
}
