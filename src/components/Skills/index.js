import React from "react";
import Card from "./Card";
import CardConception from "./CardConception";
import CardDb from "./CardDb";
import CardFramework from "./CardFramework";
import CardLangage from "./CardLangage";
import CardVersioning from "./CardVersioning";
import iconWeb from '../Assets/Icons/techWeb.png'
import iconLangage from '../Assets/Icons/langage.png'
import iconFramework from '../Assets/Icons/framework.png'
import iconDb from '../Assets/Icons/database.png'
import iconGit from '../Assets/Icons/versioning.png'
import iconTools from '../Assets/Icons/tools.png'
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
                    <Card title = "Web technologies" image={iconWeb}/>
                    <CardLangage title="Programming languages" image={iconLangage}/>
                    <CardFramework title="Frameworks" image={iconFramework}/>
                    <CardDb title="Databases" image={iconDb}/>
                    <CardVersioning title="System versioning" image={iconGit}/>
                    <CardConception title="Tools" image={iconTools}/>
                </div>
            </div>
        </div>
    )
}
export default Skills
