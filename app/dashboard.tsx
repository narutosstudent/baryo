import { Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

export default function Dashboard() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Text>baryo</Text>
    </>
  )
}
