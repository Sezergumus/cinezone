import '@/app/globals.css'
import Header from '@/app/components/Header'
import Page404 from '@/app/components/Page404'
import Footer from '@/app/components/Footer'

export default function NotFound() {
  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <Page404 />
      <Footer />
    </div>
  )
}
