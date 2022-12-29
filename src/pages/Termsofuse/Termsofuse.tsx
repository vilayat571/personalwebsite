import { Helmet } from "react-helmet-async";
import Contentdiv from "../../components/Termsofuse/Contentdiv";
import Imgtitle from "../../components/Termsofuse/Imgtitle";
import Layout from "../../layout/Layout";

export default function Termsofuse() {
  return (
    <Layout>
      <Helmet>
        <title>Sign up to Vilayat Safarov</title>
        <meta
          name="description"
          content="Sign up to read and learn blogs on: Html & Css & Javascript & React JS etc."
        />
        <meta property="og:url" content="https://vilayatsafarov.com" />
        <meta property="og:title" content="Sign up to Vilayat Safarov" />
        <meta
          property="og:description"
          content="Sign up to read and learn blogs on: Html & Css & Javascript & React JS etc."
        />
        <meta
          name="keywords"
          content="Learn React, learn JavaScript, learn TypeScript"
        />
      </Helmet>
      <div className="flex flex-col pt-24 mt-28 lg:mx-20 sm:mx-0 md:mx-0 xl:mx-40 h-auto  w-full">
        <Imgtitle />
        <Contentdiv
          title={"Mission"}
          content={
            "My mission is linked to my goals, so my goals are to do the best work in my field. Therefore, my aim in producing quality work is also to create software tools that will facilitate people's work. At the same time, I want to constantly improve myself. Dr. As Robert Kiyosaki said - 'Do what you want today for tomorrow'"
          }
        />
        <div className="lg:h-24 md:h-20 sm:h-24 xl:h-24"></div>

        <Contentdiv
          title={"Privacy"}
          content={
            "I collect user first names and email addresses. These are stored in my own database. I also track the blog posts that you have read to give you good recommendations. This data is not viewable by anyone other than myself. When you read a blog post, I keep track of that. Everything on this site is open source so if you're curious, you can find out for yourself what I do with your data"
          }
        />
        <div className="lg:h-24 md:h-20 sm:h-24 xl:h-24"></div>

        <Contentdiv
          title={"Terms"}
          content={
            "Everything on vilayatsafarov.com is provided free of charge and therefore there is no promise this will continue. I'll do my best to keep things going and preserve your data, but that's a plan, not a promise."
          }
        />
        <div className="lg:h-24 md:h-20 sm:h-24 xl:h-24"></div>

        <Contentdiv
          title={"How you can support me best"}
          content={
            "I appreciate that you're even reading this section, so that's nice support in itself . If you want to support me, read my blogs and share my blog in any social media. You can share my website too"
          }
        />

        <div className="lg:h-24 md:h-20 sm:h-24 xl:h-24"></div>

        <Contentdiv
          title={"Conclusion"}
          content={
            "I hope this transparency page gives you an idea of what my incentives are and if you're one of the terrific people who benefit from my free stuff I hope you use that to make your corner of the world a better place. Please keep in mind that sharing my blogs, I try  to improve my skills.             "
          }
        />
        <div className="h-16"></div>
        <h1 className="text-[#a9adc1] tracking-[0.6px] xl:mx-24 lg:mx-24 sm:mx-0 md:mx-0">
          Take care of you!
        </h1>
      </div>
    </Layout>
  );
}
