import Contentdiv from "../../components/Termsofuse/Contentdiv";
import Layout from "../../layout/Layout";

export default function Termsofuse() {
  return (
    <Layout>
      <div className="flex flex-col pt-32 lg:mx-20 sm:mx-0 md:mx-0 xl:mx-40 h-auto  w-full">
    
        <div className="w-full flex-col h-auto flex justify-center items-center">

          <img
            className="  h-[600px] object-fill mb-28 rounded-md border-0"
src='https://www.posturite.co.uk/media/mageplaza/blog/post/uploads/2016/09/workstation-405768_1920.jpg'
            alt=""
          />
        </div>

        <Contentdiv
          title={"Mission"}
          content={
            "My mission is linked to my goals, so my goals are to do the best work in my field. Therefore, my aim in producing quality work is also to create software tools that will facilitate people's work. At the same time, I want to constantly improve myself. Dr. As Robert Kiyosaki said - 'Do what you want today for tomorrow'"
          }
        />
        <div className="h-28"></div>

        <Contentdiv
          title={"Privacy"}
          content={
            "I collect user first names and email addresses. These are stored in my own database. I also track the blog posts that you have read to give you good recommendations. This data is not viewable by anyone other than myself. When you read a blog post, I keep track of that. Everything on this site is open source so if you're curious, you can find out for yourself what I do with your data"
          }
        />
        <div className="h-28"></div>

        <Contentdiv
          title={"Terms"}
          content={
            "Everything on vilayatsafarov.com is provided free of charge and therefore there is no promise this will continue. I'll do my best to keep things going and preserve your data, but that's a plan, not a promise."
          }
        />
        <div className="h-28"></div>

        <Contentdiv
          title={"How you can support me best"}
          content={
            "I appreciate that you're even reading this section, so that's nice support in itself . If you want to support me, read my blogs and share my blog in any social media. You can share my website too"
          }
        />

        <div className="h-28"></div>

        <Contentdiv
          title={"Conclusion"}
          content={
            "I hope this transparency page gives you an idea of what my incentives are and if you're one of the terrific people who benefit from my free stuff I hope you use that to make your corner of the world a better place. Please keep in mind that sharing my blogs, I try  to improve my skills.             "
          }
        />
        <div className="h-16"></div>
        <h1 className="text-[#a9adc1] tracking-[0.6px] mx-24">Take care!</h1>
      </div>
    </Layout>
  );
}
