import React from 'react'
import './works.css'
import PortfolioImg1 from '../../assets/portfolio-1.png'
import PortfolioImg2 from '../../assets/portfolio-2.png'
import PortfolioImg3 from '../../assets/portfolio-3.png'
import PortfolioImg4 from '../../assets/portfolio-4.png'
import PortfolioImg5 from '../../assets/portfolio-5.png'
import PortfolioImg6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
    <section id="works">
        <h2 class="worksTitle">My Portfolio</h2>
        <span class="workDesc">Explore my portfolio to see projects that highlight my expertise in backend development, cloud computing, and data engineering. From scalable microservices to real-time data pipelines, I leverage technologies like Python, Java, and AWS to build efficient, robust solutions across various industries.</span>
        <div class="worksImgs">
            <img src= {PortfolioImg1} alt="" class="worksImg"/>
            <img src= {PortfolioImg2} alt="" class="worksImg"/>
            <img src= {PortfolioImg3} alt="" class="worksImg"/>
            <img src= {PortfolioImg4} alt="" class="worksImg"/>
            <img src= {PortfolioImg5} alt="" class="worksImg"/>
            <img src= {PortfolioImg6} alt="" class="worksImg"/>
        </div>
        {/* <button class="worksBtn">
            See More
        </button> */}
    </section>
  )
}

export default Works