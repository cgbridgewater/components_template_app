import { useEffect } from "react";

const Movement_OnScroll = () => {

    useEffect(() => {
        // listen for Split boxes to enter screen to reveal them
        const split_text = document.querySelectorAll(".split_box_text");
        const split_img = document.querySelectorAll(".split_box_img");
        // add SHOW class onto observed intersection, and then remove it's observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                // this keeps it on the screen, remove this and it will fade out when threshold is not met
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        },{
            // this requires "x%"" of the div to be intersecting before made visable
            threshold: 0.2
        });
        // trigger text box
        split_text.forEach(split => {
            observer.observe(split)
        })
        // trigger img box
        split_img.forEach(split => {
            observer.observe(split)
        })
    },[])

    return(
        <div className="container">

                {/* THIS WILL SLIDE IN FROM LEFT AND RIGHT */}
                <div className="split_box ">
                    <div className="split_box_text hidden left">
                        <div className="menu_link">
                            <h2>Slide In View</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quis maxime dignissimos perferendis pariatur, error voluptates deserunt magni vero eaque quo incidunt modi veniam est temporibus illo fuga maiores neque!</p>
                        </div>
                    </div>
                    <div className="split_box_img hidden right">
                        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/doc-and-marty-back-to-the-future-cropped-2.jpg?q=70&fit=crop&w=750&dpr=1" alt="In 1955 It's A Little Hard To Come By" />
                    </div>
                </div>

                {/* THIS WILL SLIDE IN FROM THE BOTTOM */}
                <div className="split_box ">
                    <div className="split_box_img hidden bottom">
                        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/doc-and-marty-back-to-the-future-cropped-2.jpg?q=70&fit=crop&w=750&dpr=1" alt="In 1955 It's A Little Hard To Come By" />
                    </div>
                    <div className="split_box_text hidden bottom">
                        <div className="menu_link">
                            <h2>Slide In View</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quis maxime dignissimos perferendis pariatur, error voluptates deserunt magni vero eaque quo incidunt modi veniam est temporibus illo fuga maiores neque!</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Movement_OnScroll;