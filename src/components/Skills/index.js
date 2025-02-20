import React from "react";
import Card from "./Card";
import CardConception from "./CardConception";
import CardDb from "./CardDb";
import CardFramework from "./CardFramework";
import CardLangage from "./CardLangage";
import CardVersioning from "./CardVersioning";
import iconWeb from '../Assets/Icons/techWeb.webp'
import iconLangage from '../Assets/Icons/langage.webp'
import iconFramework from '../Assets/Icons/framework.webp'
import iconDb from '../Assets/Icons/database.webp'
import iconGit from '../Assets/Icons/versioning.webp'
import iconTools from '../Assets/Icons/tools.webp'
import "./skills.css"
import { motion } from "framer-motion";
import Ribbons from "../Animation"

const Skills = () => {
    return(
        <div id="skill" className="container-skills">
                <Ribbons
                    baseThickness={30}
                    colors={['#14FF00']}
                    speedMultiplier={0.5}
                    maxAge={500}
                    enableFade={false}
                    enableShaderEffect={true}
                />
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
