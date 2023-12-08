import Title from '@/components/atoms/Title'
import './global.css'
import Text from '@/components/atoms/Text'
import NavItems from '@/components/molecules/NavItems'
import NavBar from '@/components/organisms/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Title size='text-6xl'>Seja bem-vindo(a)! Sou Giovanna</Title>
      <Text>Sou estudante de programação</Text>
    </div>
  )
}
