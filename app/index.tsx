import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Index() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}
