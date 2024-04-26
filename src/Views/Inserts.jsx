import Button from "../Components/Button_Component/Button";
import CardCarousel from "../Components/CardCarousel/CardCarousel";
import Slideshow from "../Components/Slideshow_Component/Slideshow";

const Inserts = () => {

    return (
        <main>
            <div className="wrapper">
                {/* PAGE TITLE REMOVE PRIOR TO PRODUCTION */}
                <h1 style={{color:"red"}}>This Page Demonstrates Component Inserts</h1>
                {/* END PAGE TITLE */}

                {/* BUTTON INSERT */}
                <h1>This is the button component</h1>
                <Button to="/" text="Home Page" />
                {/* END BUTTON INSERT */}

                {/* SLIDE SHOW INSERT */}
                <h1>This is the Slideshow component</h1>
                <Slideshow />
                {/* END SLIDESHOW INSERT */}

                {/* CARD CAROUSEL INSERT */}
                <br /><br />
                <h1>This is the Card Carousel component</h1>
                <h4>(Food break)</h4>
                <CardCarousel />
                {/* END CARD CAROUSEL INSERT */}

                {/* SPLITBOX INSERT */}
                <h1>This is basic split box</h1>
                <div className="split_box">
                    <div className="split_box_text">
                        <p>
                            So there I was, minding my own business. This crazy old codger with a cane shows up. He says he's my distant relative. I don't see any resemblance. So he says "How would you like to be rich?". So I say "Sure."
                        </p>
                        <p>
                            So he lays this book on me. He says this book will tell me the outcome of every sporting event 'til the end of the century. All I have to do is bet on the winner, and I'll never lose. So I said, "What's the catch?". He says, "No catch. Just keep it a secret." After that, he disappeared. I never saw him again.
                        </p>
                    </div>
                    <div className="split_box_img">
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-f46cb92618cfb7306a5ad5aadb35e08b-pjlq" alt="Biff & Old Biff" />
                    </div>
                </div>
                {/* END SPLITBOX INSERT */}

                {/* CENTERED BOX INSERT */}
                <div className="centered_box">
                    <h1>This is a basic centered box</h1> 
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
                </div>
                {/* END CENTERED BOX INSERT */}

            </div>
        </main>
    )
}

export default Inserts;