import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { Stack, useRouter } from 'expo-router'
import { ToastProvider } from 'react-native-toast-notifications'
import { COLORS } from '../constants'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'

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
  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/dashboard')
    } else {
      router.push('/auth')
    }
  })

  return (
    <ToastProvider placement="top">
      <NativeBaseProvider theme={theme}>
        <Stack initialRouteName="/auth" />
      </NativeBaseProvider>
    </ToastProvider>
  )
}
