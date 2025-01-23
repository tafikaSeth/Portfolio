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
import { motion } from "framer-motion";

const Skills = () => {
    return(
        <div id="skill" className="container-skills">
            <div className="content-skills">
                <div className="content-skills-title">
                    <motion.h1
                        initial = {{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        viewport={{ once: false, amount: .5}}
                    >
                        My Skills
                    </motion.h1>
                    <motion.hr
                        initial = {{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        viewport={{ once: false, amount: .5 }}
                    />
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
