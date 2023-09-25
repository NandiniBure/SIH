import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import {Main} from '@/components/main/Main'
import Video from '@/components/video/Video'
import Cart from '@/components/cart/Cart'
import Blogs from '@/components/blogs/Blogs'
import Announcement from '@/components/Anouncement/Announcement'
import FeedBack from '@/components/feedback/FeedBack'
import Report from '@/components/Report/Report'
import { FeedBackOne } from '@/components/feedback/FeedBackOne'
import Login from '@/components/Auth/Login'
import SignUp from '@/components/Auth/SignUp'
import Videoform from '@/components/video/Videoform'
import BlogForm from '@/components/blogs/BlogForm'
import AnnouncementForm from '@/components/Anouncement/AnnouncementForm'
import AnnoucementDetails from '@/components/Anouncement/AnnoucementDetails'
import BlogDetails from '@/components/blogs/BlogDetails'

export default function Home() {
  return (
    <div className="bg-lime-100">
        <Header/>
     <BlogDetails/>
        <Footer/>
    </div>
  )
}
