import Billboard from '@/components/Billboard'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Navbar username="Test" />
      <Billboard title="test" description="testing" imageURL="/images/Kingdom.png" />
    </div>
  )
}
