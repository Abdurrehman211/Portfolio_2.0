import Navbar from "./Navbar";
import './style.css';
import image from './images/prfile pic.jpg'
function Portfolio() {
    return (
        <>
            <div className="header">
                <Navbar />
            </div>
            <div className="body">
                <Landingpage />
                <Aboutme />
            </div>
        </>
    )
}
function Landingpage() {
    return (
        <>
            <section class="bgimage" id="home">
                <div className="main">
                    <div className="child">
                        <h1>Hi, it's me Abdur-Rehman</h1>
                        <p>I am professional Web developer in the City</p>
                    </div>
                </div>
            </section>
        </>

    )
}
// Aboutme.js




function Aboutme() {
    return (
        <section id="about">
            <div className="container1">
                <h1 className="text-center"><li>About Me</li></h1>
                <div className="row1">
                    <div className="col4">
                        <img className="image" src={image} alt="image" />
                    </div>
                    <div className="col8">
                        <p>
                            I embody the essence of diligence and dedication, effortlessly intertwining the essentials
                            of life with I unwavering work ethic. I commitment to excellence is palpable in every
                            endeavor I undertake, as I seamlessly navigate the balance between priorities and passion.
                            Through I relentless pursuit of success, I inspire those around I to elevate their own
                            standards, demonstrating the transformative power of hard work and perseverance.
                            In I presence, the mundane transforms into the extraordinary,
                            fueled by I relentless drive to surpass boundaries and achieve greatness.
                        </p>
                    </div>
                </div>
                <div className="row2">
                    <div className="col6">
                        <ul>
                            <li>Name:<span className="details" > Abdur Rehman</span> </li>
                            <li>Age:<span className="details"> 20</span></li>
                            <li>Occupation:<span className="details"> Web Developer</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row3 ">
                <h2 id="h2">More about me:</h2>
                    <p>
                    <li> <span className="heading" >Essentials</span> : Emphasize the importance of the basics, such as health, family, and personal growth.</li> <br />
                    <li> <span className="heading" >Prioritization</span> : Highlight the skill of balancing essential tasks and responsibilities effectively.</li> <br />
                    <li> <span className="heading" >Commitment</span> : Showcase dedication to goals, projects, and personal development. </li><br />
                    <li> <span className="heading" >Resilience</span> : Highlight the ability to overcome challenges and setbacks with perseverance and determination.</li> <br />
                    <li> <span className="heading" >Productivity</span> : Mention efficient use of time and resources to achieve desired outcomes.</li> <br />
                    <li> <span className="heading" >Continuous-Learning</span> : Note the habit of constantly seeking knowledge and improvement in various aspects of life.</li> <br />
                    <li> <span className="heading" >Positive Influence</span> : Illustrate how hard work can inspire and uplift others in your sphere of influence.</li> <br />
                    <li> <span className="heading" >Goal Orientation</span> : Emphasize setting and working towards meaningful goals with focus and dedication.</li> <br />     
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;