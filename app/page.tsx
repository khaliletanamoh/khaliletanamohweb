import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = await getPosts(2);
  return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><BlogSection posts={posts} /><Contact /></main><Footer /><WhatsAppButton /></>;
}
