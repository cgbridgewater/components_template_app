import { useEffect } from "react";
import Button from "../Components/Button_Component/Button";

const CenteredPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <main>
            <div className="wrapper">
                <div className="centered_box">
                    <h1 style={{color:"red"}}>This Page Demonstrates Centered Views</h1>
                    <h1>Silence Earthling</h1> 
                    <h3>My name is Darth Vader. I'm am an extra-terrestrial from the planet Vulcan.</h3>
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/05/Eddie-Van-Halen-Cameo-Back-to-the-Future.jpeg" alt="Space Suit" />
                    <p>
                        Um, well it's a delorean, right? Hello, Jennifer. I have a feeling too. What you got under here? Alright, punk, now-
                    </p>
                    <p>
                        What, right here right now in the cafeteria? What if she said no? I don't know if I could take that kind of rejection. Besides, I think she'd rather go with somebody else. He's absolutely right, Marty. the last thing you need is headaches. Can I go now, Mr. Strickland? Well, uh, listen, uh, I really- Uh, look me up when you get there.
                    </p>
                    <p>
                        C'mon. Tab? I can't give you a tab unless you order something. Right. Doc, you gotta help me. you were the only one who knows how your time machine works. Hey, hey, keep rolling, keep rolling there. No, no, no, no, this sucker's electrical. But I need a nuclear reaction to generate the one point twenty-one gigawatts of electricity that I need.
                    </p>
                    <Button to="/" text="Home Page" />
                </div>
                <div className="centered_box">
                    <h3>Why Are Things So Heavy In The Future?</h3>
                    <p>
                        You heard her she said get your meat hooks, off, uh please. You know Marty, I'm gonna be very sad to see you go. You've really mad a difference in my life, you've given me something to shoot for. Just knowing, that I'm gonna be around to se 1985, that I'm gonna succeed in this. That I'm gonna have a chance to travel through time. It's going to be really hard waiting 30 years before I could talk to you about everything that's happened in the past few days. I'm really gonna miss you, Marty. Doc? Lorraine. Whoa, wait a minute, Doc, are you telling me that my mother has got the hots for me?
                    </p>
                    <p>
                        Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Yeah. What, right here right now in the cafeteria? What if she said no? I don't know if I could take that kind of rejection. Besides, I think she'd rather go with somebody else. I'm too loud. I can't believe it. I'm never gonna get a chance to play in front of anybody. A colored mayor, that'll be the day.
                    </p>
                    <p>
                        Marty you gotta come back with me. The hell you doing to my car? Yeah, sure, okay. Yeah well, you shouldn't drink. Doc.
                    </p>
                    <p>
                        Are you sure about this storm? I don't wanna know your name. I don't wanna know anything anything about you. Hey not too early I sleep in Sunday's, hey McFly, you're shoe's untied, don't be so gullible, McFly. Y'know this time it wasn't my fault. The Doc set all of his clocks twenty-five minutes slow. Yeah I know, If you put your mind to it you could accomplish anything.
                    </p>
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/back-to-the-future-doc-and-marty-cropped.jpg?q=49&fit=crop&w=750&dpr=2" alt="Doc and Marty" />
                </div>
                <div className="centered_box">
                    <h3>I Finally Invent Something That Works!</h3>
                    <p>
                        A bolt of lightning, unfortunately, you never know when or where it's ever gonna strike. That's a Florence Nightingale effect. It happens in hospitals when nurses fall in love with their patients. Go to it, kid. This is it. This is the answer. It says here that a bolt of lightning is gonna strike the clock tower precisely at 10:04 p.m. next Saturday night. If we could somehow harness this bolt of lightning, channel it into the flux capacitor, it just might work. Next Saturday night, we're sending you back to the future.
                    </p>
                    <p>
                        Precisely. I don't wanna see you in here again. whoa, this is it, this is the part coming up, Doc. Well yeah, you know we have two of them. Then how am I supposed to ever meet anybody.
                    </p>
                    <p>
                        Yeah, I'll keep that in mind. Go. Go. McFly. Something that really cooks. Alright, alright this is an oldie, but uh, it's an oldie where I come from. Alright guys, let's do some blues riff in b, watch me for the changes, and uh, try and keep up, okay. No, I refuse to except the responsibility.
                    </p>
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/051e02e5b7920d5555ce85f919a82114.jpg?q=70&fit=crop&w=750&dpr=1" alt="Doc On A Clock" />
                    <Button to="/split" text="Split Page Demo" />
                </div>
                <div className="centered_box">
                    <h3>Hey, Doc? Doc. Hello, anybody home?</h3>
                    <p>
                        A bolt of lightning, unfortunately, you never know when or where it's ever gonna strike. That's a Florence Nightingale effect. It happens in hospitals when nurses fall in love with their patients. Go to it, kid. This is it. This is the answer. It says here that a bolt of lightning is gonna strike the clock tower precisely at 10:04 p.m. next Saturday night. If we could somehow harness this bolt of lightning, channel it into the flux capacitor, it just might work. Next Saturday night, we're sending you back to the future.
                    </p>
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/doc-and-marty-back-to-the-future-cropped-2.jpg?q=70&fit=crop&w=750&dpr=1" alt="In 1955 It's A Little Hard To Come By" />
                </div>
            </div>
        </main>
    );
};

export default CenteredPage; 