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
                <div class="skillbarText">
                    <h2>Software Dev Projects</h2>
                    <p>This is a demo text. Alter this</p>
                </div>
            </div>
            <div class="skillBar">
                <img src={WebDesign} alt="WebDesign" class="skillBarImg"/>
                <div class="skillbarText">
                    <h2>Data Analytics</h2>
                    <p>This is a demo text. Alter this</p>
                </div>
            </div>
            <div class="skillBar">
                <img src={AppDesign} alt="AppDesign" class="skillBarImg"/>
                <div class="skillbarText">
                    <h2>Machine Learning Projects</h2>
                    <p>This is a demo text. Alter this</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills 