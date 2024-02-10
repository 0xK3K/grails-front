import { Box, Container, MainText } from '@/components/Layout'

export default function NotFound() {
  return (
    <Container>
      <Box col center className='h-[70vh]'>
        <MainText gradient heading className='text-2xl'>
          PAGE NOT FOUND
        </MainText>
        <MainText gradient heading>
          seems you got lost on your quest, adventurer
        </MainText>
      </Box>
    </Container>
  )
}
