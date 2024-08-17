import React, { useEffect, useRef, useState } from 'react';
import FlyingBee from "./flyingBee.png";
import './WanderingBee_Style.css';

const WanderingBee = () => {
    // Ref to keep track of the bee element
    const followerRef = useRef(null);
    
    // Refs to handle mouse position
    const mousePos = useRef({ x: 0, y: 0 });
    const previousMousePos = useRef({ x: 0, y: 0 });
    const xp = useRef(0); // Horizontal position of the bee (x-axis)

    // State to handle jumping - not used now
    const [isJumping, setIsJumping] = useState(false);

    useEffect(() => {
        // Function to handle mouse movement
        const handleMouseMove = (e) => {
            mousePos.current.x = e.pageX; // Update current mouse x position
            mousePos.current.y = e.pageY; // Update current mouse y position

            // Get the current position of the bee
            const currentBeePosition = followerRef.current.getBoundingClientRect().left + followerRef.current.offsetWidth / 2;

            // Check if the mouse moved left or right and flip the bee accordingly
            if (mousePos.current.x > currentBeePosition && previousMousePos.current.x <= currentBeePosition) {
                followerRef.current.classList.remove("flipped"); // Bee faces right
            } else if (mousePos.current.x < currentBeePosition && previousMousePos.current.x >= currentBeePosition) {
                followerRef.current.classList.add("flipped"); // Bee faces left
            }

            // Store the previous mouse position for the next movement check
            previousMousePos.current = { ...mousePos.current };
        };

        // Add mouse event listeners
        document.addEventListener("mousemove", handleMouseMove);

        // Set up an interval to smoothly move the bee towards the mouse position
        const interval = setInterval(() => {
            xp.current += (mousePos.current.x - xp.current) / 32; // Smoothly move bee towards mouse

            // Get the bee's width
            const beeWidth = followerRef.current.offsetWidth;

            // Set boundaries for the bee's movement
            const leftBoundary = 16; // Space from the left edge
            const rightBoundary = window.innerWidth - beeWidth - 34; // Space from the right edge

            // Ensure the bee doesn't exceed the boundaries
            if (xp.current < leftBoundary) {
                xp.current = leftBoundary; // Reset to left boundary if necessary
            } else if (xp.current > rightBoundary) {
                xp.current = rightBoundary; // Reset to right boundary if necessary
            }

            // Update the bee's left position
            followerRef.current.style.left = xp.current + "px";
        }, 30); // Update position every 30 ms

        // Cleanup function to remove event listeners and clear the interval
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, [isJumping]); // Dependency on isJumping

    return (
        <div className="wandering-bee">
            <img src={FlyingBee} ref={followerRef} alt="Flying Bee" />
        </div>
    );
};

export default WanderingBee;
