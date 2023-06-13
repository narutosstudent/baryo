import { COLORS } from '../constants'
import { VStack, Text } from 'native-base'
import { Stack, Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

type Link = {
  name: string
  path: string
  id: string
}

const links: Array<Link> = [
  { name: 'Habits', path: '/habits', id: 'habits' },
  { name: 'Remembrance', path: '/remembrance', id: 'remembrance' },
  { name: 'Quotes', path: '/quotes', id: 'quotes' },
  { name: 'Regret Diary', path: '/regret-diary', id: 'regret-diary' },
  { name: 'Images', path: '/images', id: 'images' },
  { name: 'Weaknesses', path: '/weaknesses', id: 'weaknesses' },
  { name: 'Principles', path: '/principles', id: 'principles' },
]

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
        <Text color={COLORS.orange} fontSize={32} fontWeight={800}>
          Baryo
        </Text>
        <VStack
          borderRadius={6}
          bgColor={COLORS.pink}
          width="100%"
          alignItems="center"
          p={2.5}
          space={5}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              style={{
                width: '100%',
                borderRadius: 2,
                backgroundColor: COLORS.orange,
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}
            >
              <Text color={COLORS.brown} fontSize={15} fontWeight={600}>
                {link.name}
              </Text>

              <AntDesign name="right" size={20} color={COLORS.brown} />
            </Link>
          ))}
        </VStack>
      </VStack>
    </>
  )
}
