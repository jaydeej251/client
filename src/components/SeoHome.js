import React from 'react';
import '../styles/Seo.css';
import backgroundImage from '../assets/homebg.jpg';
import seoImage from '../assets/bg-seo.png'

function SEO() {
  return (
    <div className="seo-container">
      <div className="seo-title">
        <h1>SEO Services in Arizona</h1>
        <div
          className="seo-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
      <div className="se-image2">
        <img src={seoImage} alt="SEO Image"></img>
      </div>
      <div className="seo-description">
        <p>
          Your website is your window to the internet and one of the ways users
          can discover and learn about you. You can have the easiest to
          navigate, user-friendly, and beautiful website on the web, but it will
          all be a wasted opportunity if it’s not showing up on the SERPs
          (search engine results pages). That’s why Search Engine Optimization
          (SEO) is essential.
        </p>
      </div>
      <div className="seo-section">
        <h2>What is SEO?</h2>
        <p>
          Search engine optimization is an internet marketing technique that
          aims to boost website visits through increasing rankings in the SERPs
          for particular keyword searches or queries relating to the website’s
          niche. Unlike PPC, SEO is an organic way of obtaining visits. Your
          placement on the SERPs will be influenced by your authority,
          relevance, and the quality of content found on your website.
        </p>
      </div>
      <div className="seo-section">
        <h2>How Can We Help Boost Your SERP Ranking?</h2>
        <p>
          Primeview, an internet marketing and e-solutions company in Arizona,
          has a simple yet effective approach to SEO. We work with you, our
          client, to develop a strategy that fits your needs, goals, and
          identity as a business. We will conduct an analysis of your niche,
          learn about the current level of competition within your field, and
          formulate a campaign tailored around those details.
        </p>
        <ul>
          <li>
            <span>Keyword Analysis</span>– A properly executed search engine
            optimization campaign starts with keyword analysis. In order to
            build traffic towards your site, PrimeView uses advanced tools and
            extensive research to find the best keywords to reach your target
            market. We don’t just look for the appropriate keywords, we get you
            keywords that convert well. Doing so will bring in a steady stream
            of traffic to your site, boost leads, and increase conversions.
          </li>
          <li>
            <span>Onsite Optimization</span>– From improving your internal link
            structure and content creation to increasing click-through rates,
            our SEO team is committed to fulfilling the requirements of a search
            engine-friendly page without compromising on user experience. We
            strike the balance between addressing the needs of your visitors,
            optimizing your site for the search engines, and ensuring the
            original web design you had in mind is still in place.
          </li>
          <li>
            <span>Offsite Optimization</span>– A strong SEO campaign includes
            link building. Link building is involved in developing inbound links
            to your website to increase your reputation and credibility for
            search engines. We will focus on increasing high-value links to your
            site and make sure that all of them are aligned with your business
            and come from reputable sources. Effective link building is not just
            about quantity, it’s about prioritizing the quality of links leading
            to your website.
          </li>
        </ul>
        <p>
          PrimeView’s team of search engine marketers have years of experience
          optimizing new and existing sites. They are abreast with the latest
          trends, effective practices, and algorithm changes, which enable them
          to improve your rankings while adhering to the standards set by search
          engines and internet users alike.
        </p>
      </div>
      <div className="seo-section">
        <h2>Increasing Local and Global Reach</h2>
        <p>
          With SEO, you can reach a global audience or take advantage of local
          markets. PrimeView ensures that your website is properly optimized so
          that your business is represented on a local, national or even global
          scale. All our techniques are safe and ethical and won’t jeopardize
          your current position in the SERPs.
        </p>
      </div>
      <div className="seo-section">
        <h2>SEO Campaign Implementation and Development</h2>
        <p>
          As search engine algorithms change, so will the campaign we’ll create
          for you. PrimeView doesn’t just rely on existing SEO practices and
          techniques, we constantly look for new and innovative ways to add to
          our marketing mix to drive your site to the top of the search engines
          and maintain its position.
          <br></br>
          <br />
          PrimeView will not only help you rank better every month in search
          engines, but we’ll work to keep you there for a long time.
        </p>
      </div>
      <div className="seo-section">
        <h2>
          Helping Businesses in Arizona and other parts of the United States
          Grow
        </h2>
        <p>
          Over the years, we have delivered results for various businesses.
          Please head over our <span>portfolio section</span> to see some of the
          companies we worked with.
          <br />
          <br />
          Meanwhile, our team is ready to provide you with more information or
          answer any inquiries you have about our services. You get in touch
          with us via phone or filling up and submitting a short form found on
          this website.
          <br />
          <br />
          PrimeView is a company based in Scottsdale, Arizona that provides
          e-solutions and internet marketing. Their services include web design,
          web and mobile development, web hosting and maintenance, e-commerce
          design, SEO, PPC, video marketing, and social media marketing.
        </p>
      </div>
    </div>
  );
}

export default SEO;
