import Billboard from '@/components/Billboard'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'

export default function Home() {
  return (
    <div className=''>
      {/* Navbar */}
      <Navbar username="delacruz.ronaldvergel@gmail.com" />

      {/* Billboard */}
      <Billboard title="test" description="testing" imageURL="/images/Kingdom.png" />

      {/* Section Cards */}
      <SectionCards title="Disney" />

    </div>
  )
}
