import BlogSection from "./UI/Blog.section";
import Footer from "./UI/Footer";
import HeaderContent from "./UI/HeaderContent";
import NFTPassSection from "./UI/NFTPass.section";
import ProfitingSection from "./UI/Profiting.section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <HeaderContent/>
      <NFTPassSection/>
      <ProfitingSection/>
      <BlogSection/>
      <Footer/>
    </main>
  );
}
