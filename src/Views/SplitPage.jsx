import { useEffect } from "react";
import Button from "../Components/Button_Component/Button";

const SplitPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <main>
            <div className="wrapper">
                <h1>Alright, McFly, you're asking for it, and now you're gonna get it.</h1>
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
                <div className="split_box">
                    <div className="split_box_img">
                        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/2-fotor-20231205221454.jpg?q=50&fit=contain&w=750&h=415&dpr=1.5" alt="1.21 Gigawatts!" />
                    </div>
                    <div className="split_box_text">
                        <p>
                            No no no, this sucker's electrical, but it requires a nuclear reaction to generate the 1.21 gigawatts of electricity I need.
                        </p>
                        <p>
                            It's from a group of Libyan nationalists. They wanted me to build them a bomb, so I took their plutonium and in turn, gave them a shiny bomb-casing filled with used pinball machine parts.
                        </p>
                    </div>
                </div>
                <br />
                <Button to="/centered" text="Centered Page Demo" />
            </div>
        </main>
    );
};

export default SplitPage;