import { useEffect } from "react";
import Button from "../Components/Button_Component/Button";

const Index = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <main>
            <div className="wrapper">
                <div className="centered_box">
                    <h1 style={{color:"red"}}>This Page Demonstrates Mixed Views</h1>
                    <h1>Hey, Doc? Doc. Hello, anybody home?</h1>
                    <p>
                        A bolt of lightning, unfortunately, you never know when or where it's ever gonna strike. That's a Florence Nightingale effect. It happens in hospitals when nurses fall in love with their patients. Go to it, kid. This is it. This is the answer. It says here that a bolt of lightning is gonna strike the clock tower precisely at 10:04 p.m. next Saturday night. If we could somehow harness this bolt of lightning, channel it into the flux capacitor, it just might work. Next Saturday night, we're sending you back to the future.
                    </p>
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/doc-and-marty-back-to-the-future-cropped-2.jpg?q=70&fit=crop&w=750&dpr=1" alt="In 1955 It's A Little Hard To Come By" />
                </div>
                <div className="split_box">
                    <div className="split_box_text">
                        <p>
                            Marty, I'm sorry, but the only power source capable of generating one point twenty-one gigawatts of electricity is a bolt of lightning. Marty you gotta come back with me. Lorraine, are you up there? Good, you could start by sweeping the floor. Oh hey, Biff, hey, guys, how are you doing?
                        </p>
                        <p>
                            Yeah, well history is gonna change. Yeah, where does he live? He's absolutely right, Marty. the last thing you need is headaches. What do you mean you've seen this, it's brand new. Stop it.
                        </p>
                    </div>
                    <div className="split_box_img">
                        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/doc-brown-v1-cropped.jpg?q=70&fit=contain&w=750&h=415&dpr=1" alt="You Won't Get Back To The Future" />
                    </div>
                </div>
                <div className="centered_box">
                    <Button to="/split" text="Split Page Demo" />
                    <h3>The Way I See It, If You're Gonna Build A Time Machine Into A Car, Why Not Do It With Some Style?</h3>
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/07/Doc-Brown-Explains-His-Time-Machine-To-Marty.jpg?q=70&fit=crop&w=750&dpr=1" alt="If You're Gonna Build A Time Machine Into A Car..." />
                    <p>A bolt of lightning, unfortunately, you never know when or where it's ever gonna strike. That's a Florence Nightingale effect. It happens in hospitals when nurses fall in love with their patients. Go to it, kid. This is it. This is the answer. It says here that a bolt of lightning is gonna strike the clock tower precisely at 10:04 p.m. next Saturday night. If we could somehow harness this bolt of lightning, channel it into the flux capacitor, it just might work. Next Saturday night, we're sending you back to the future.</p>
                </div>
            </div>
        </main>
    );
};

export default Index;