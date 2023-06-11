import { useState } from 'react'
import { COLORS } from '../constants'
import { VStack, Text, Input, Button, HStack } from 'native-base'
import { Stack } from 'expo-router'

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

export default function Index() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function onAuthPress() {
    if (!validateEmail(email)) {
      alert('Please enter a valid email')
      return
    }

    if (isSignUp) {
    } else {
    }
  }

  const isAuthButtonDisabled = isSignUp
    ? Boolean(email || password || confirmPassword)
    : Boolean(email || password)

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <VStack
        bgColor={COLORS.brown}
        height="100%"
        width="100%"
        pt={5}
        px={7}
        space={4}
        alignItems="center"
      >
        <Text color={COLORS.orange} fontSize={32} fontWeight={800}>
          Baryo
        </Text>
        <VStack
          pt={4}
          px={5}
          height="5/6"
          borderRadius={6}
          bgColor={COLORS.pink}
          width="100%"
          alignItems="center"
        >
          <Text color={COLORS.brown} fontWeight={600} fontSize={24}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Text>
          <VStack space={6} width="100%" mt={4}>
            <VStack width="100%" space={1}>
              <Text fontWeight={600} fontSize={16} color={COLORS.brown}>
                Email
              </Text>
              <Input
                _focus={{ shadow: '1' }}
                placeholder="john@gmail.com"
                bgColor={COLORS.orange}
                width="100%"
                color={COLORS.brown}
                placeholderTextColor={COLORS.brown}
                borderWidth={0}
                fontWeight={500}
                fontSize={14}
                onChangeText={(text) => setEmail(text)}
                type="text"
              />
            </VStack>

            <VStack width="100%" space={1}>
              <Text fontWeight={600} fontSize={16} color={COLORS.brown}>
                Password
              </Text>
              <Input
                _focus={{ shadow: '1' }}
                bgColor={COLORS.orange}
                width="100%"
                color={COLORS.brown}
                placeholderTextColor={COLORS.brown}
                borderWidth={0}
                fontWeight={500}
                fontSize={14}
                onChangeText={(text) => setPassword(text)}
                type="password"
              />
            </VStack>

            {isSignUp && (
              <VStack width="100%" space={1}>
                <Text fontWeight={600} fontSize={16} color={COLORS.brown}>
                  Confirm password
                </Text>
                <Input
                  _focus={{ shadow: '1' }}
                  bgColor={COLORS.orange}
                  width="100%"
                  color={COLORS.brown}
                  placeholderTextColor={COLORS.brown}
                  borderWidth={0}
                  fontWeight={500}
                  fontSize={14}
                  onChangeText={(text) => setConfirmPassword(text)}
                  type="password"
                />
              </VStack>
            )}
          </VStack>

          <VStack mt={10} space={4}>
            <Button
              bgColor={COLORS.brown}
              shadow="3"
              borderRadius={2}
              alignSelf="center"
              onPress={onAuthPress}
              disabled={isAuthButtonDisabled}
            >
              <Text
                color={COLORS.orange}
                fontWeight={600}
                fontSize={16}
                borderRadius={2}
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Text>
            </Button>

            <HStack space={1} color={COLORS.brown} alignItems="center">
              <Text color={COLORS.brown}>
                {isSignUp
                  ? 'Already have an account?'
                  : "Don't have an account?"}
              </Text>
              <Button
                p={0}
                onPress={() => setIsSignUp(!isSignUp)}
                variant="ghost"
              >
                <Text color={COLORS.brown} underline>
                  {isSignUp ? 'Sign in!' : 'Sign up!'}
                </Text>
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}
