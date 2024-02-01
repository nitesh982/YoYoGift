import Carousel from '@/components/Carousel'
import Faq from '@/components/Faq'
import HeroBanner from '@/components/HeroBanner'

let items = [
  {
    image: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
  },
  {
    image: "https://images.yourstory.com/cs/2/220356402d6d11e9aa979329348d4c3e/Flipkart-1582211499554.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
  },
  {
    image: "https://techstory.in/wp-content/uploads/2021/04/EjYBcotU8AABpKb.jpg",
  },
  {
    image: "https://assets.ajio.com/medias/sys_master/images/images/hb4/h21/11393907687454/who-we-are-women-men-mobile.jpg",
  },
];

export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto'>
      <HeroBanner />
      <Carousel items={items} title={"OUR TOP BRANDS"}/>
      <Faq />
    </main>
  )
}
