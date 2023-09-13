import Billboard from '@/components/Billboard'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    },
  ];
  return (
    <div className=''>
      {/* Navbar */}
      <Navbar username="delacruz.ronaldvergel@gmail.com" />

      {/* Billboard */}
      <Billboard title="test" description="testing" imageURL="/images/Kingdom.png" />

      {/* Section Cards */}
      <div className="mt-6">
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  )
}
