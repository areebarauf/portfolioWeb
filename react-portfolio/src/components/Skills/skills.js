import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span class="skillTitle">What I do</span>
        <span class="skillDesc">I am a skilled Software/Backend Engineer with 5 years of experience in software development in multiple domain like Financial, Energy sector etc. Having experience on different frameworks like .Net MVC, .NET Core, Spring Boot, Spring Classic, Tsed and Django.</span>
        <div class="skillBars">
            <div class="skillBar">
                <img src={UIDesign} alt="UIDesign" class="skillBarImg"/>
                <div class="skillBarText">
                    <h2>Software Development</h2>
                    <p>Proficient in building scalable backend systems using Python, Java, and Node.js. Experienced in microservices architecture, API development, and cloud solutions.</p>
                </div>
            </div>
            <div class="skillBar">
                <img src={WebDesign} alt="WebDesign" class="skillBarImg"/>
                <div class="skillBarText">
                    <h2>Data Engineering</h2>
                    <p>Skilled in designing and implementing data pipelines using AWS services like Kinesis, S3, and DynamoDB. <br/> Expertise in ETL processes and real-time data processing.</p>
                </div>
            </div>
            <div class="skillBar">
                <img src={AppDesign} alt="AppDesign" class="skillBarImg"/>
                <div class="skillBarText">
                    <h2>Data Analytics/<br/>Machine Learning</h2>
                    <p>Experience with data analytics and machine learning projects. Skilled in data visualization, predictive modeling, and tools like TensorFlow and Scikit-Learn.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills 