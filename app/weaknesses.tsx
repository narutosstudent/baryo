import { COLORS } from '../constants'
import { VStack, Text, Link, HStack, Button } from 'native-base'
import { Stack } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

export default function Dashboard() {
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
        <VStack>
          <Link
            href="/dashboard"
            //     @ts-ignore
            style={{
              position: 'absolute',
              top: '35%',
              left: '-65px',
              transform: [{ translateY: '-50%' }],
            }}
          >
            <AntDesign name="leftcircleo" size={24} color={COLORS.orange} />
          </Link>
          <Text color={COLORS.orange} fontSize={32} fontWeight={800}>
            Weaknesses
          </Text>
          <Text color={COLORS.red} fontSize={16} fontWeight={600}>
            Weaknesses to be aware of.
          </Text>
        </VStack>

        <VStack width="100%">
          <HStack
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            borderRadius={2}
            borderColor={COLORS.pink}
            borderWidth={1}
            space={10}
          >
            <Text
              color={COLORS.pink}
              fontWeight={500}
              fontSize={15}
              isTruncated
            >
              Study math for 30 minutes before work
            </Text>
            <Button
              bgColor={COLORS.red}
              alignItems="center"
              justifyContent="center"
              borderRadius={10000}
              p={1}
            >
              <AntDesign name="closecircleo" size={24} color={COLORS.brown} />
            </Button>
          </HStack>
        </VStack>

        <Button
          bgColor={COLORS.orange}
          borderRadius={2}
          p={1}
          position="relative"
          bottom={0}
          right={0}
        >
          <AntDesign name="plus" size={24} color={COLORS.brown} />
        </Button>
      </VStack>
    </>
  )
}
