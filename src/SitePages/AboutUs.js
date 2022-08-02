import React from "react";
import classes from "./AboutUs.module.css"
const AboutUs = () => {
    return <body>
    <div className={classes.aboutsection}>
        <div className={classes.innercontainer} >
            <h1>About Us</h1>
            <p className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div className={classes.skills}>
                <span>Web Design</span>
                <span>Photoshop & Illustrator</span>
                <span>Coding</span>
            </div>
        </div>
    </div>
</body>

}
export default AboutUs;