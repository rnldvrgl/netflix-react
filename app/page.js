import Billboard from '@/components/Billboard'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Navbar username="delacruz.ronaldvergel@gmail.com" />
      <Billboard title="test" description="testing" imageURL="/images/Kingdom.png" />
      <Card imgUrl="/images/Kingdom.png" size="large" />
      <Card imgUrl="/images/Kingdom.png" size="medium" />
      <Card imgUrl="/images/Kingdom.png" size="small" />
    </div>
  )
}
