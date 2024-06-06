import React from "react";
import Card from "./Card";
import CardConception from "./CardConception";
import CardDb from "./CardDb";
import CardFramework from "./CardFramework";
import CardLangage from "./CardLangage";
import CardVersioning from "./CardVersioning";
import "./skills.css"

const Skills = () => {
    return(
        <div id="skill" className="container-skills">
            <div className="content-skills">
                <div className="content-skills-title">
                    <h1>My Skills</h1>
                    <hr/>
                </div>
                <div className="content-skills-myskills">
                    <Card title = "Web technologies" image="/assets/techWeb.png"/>
                    <CardLangage title="Programming languages" image="/assets/langage.png"/>
                    <CardFramework title="Frameworks" image="/assets/framework.png"/>
                    <CardDb title="Databases" image="/assets/database.png"/>
                    <CardVersioning title="System versioning" image="/assets/versioning.png"/>
                    <CardConception title="Tools" image="/assets/tools.png"/>
                </div>
            </div>
        </div>
    )
}
export default Skills
