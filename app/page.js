import Body from "../components/default_components/body/body";
import Header from "../components/default_components/header/header";
import Footer from "../components/default_components/footer/footer";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
        <Body />
      <Footer />
    </div>
  )
}
