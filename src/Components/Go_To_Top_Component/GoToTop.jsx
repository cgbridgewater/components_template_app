import React from "react";
import { useEffect, useState } from "react";

const GoToTopButton = () => {

    const [ back_to_top_button, set_back_to_top_button ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 250){
                set_back_to_top_button(true);
            } else {
                set_back_to_top_button(false);
            }
        })
    }, [])

    const scroll_up = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {back_to_top_button && (
                <button onClick={ scroll_up } className="go_top_button"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
            )}
        </>
    )
}

export default GoToTopButton;