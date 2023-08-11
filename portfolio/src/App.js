import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import sectionData from "./datas/sectionData";
const App= () =>{

    return (
        <div>
            <Navbar/>
            <AboutMe/>
            {
                sectionData.map((value)=>(
                    <Section title={value.title} des={value.des}></Section>
                ))
                }
        </div>

    )
}

export default App;