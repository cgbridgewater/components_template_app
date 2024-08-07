import React, { useEffect, useState } from "react";
import Bee_Vet from "./Bee_Vet_No_BG.png"

const FlyingBee = () => {
    const [pathData, setPathData] = useState("");
    const [beePosition, setBeePosition] = useState({ x: 0, y: 0 });

    const curveRadius = 0.05 * window.innerWidth; // Adjusted for softer edges
    const dashLength = 25; // line length
    const gapLength = 25; // gap between lines

    const updateZigzag = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const startY = height * 0.27; // Snake starts at 25% down from the top
        let startX = width * 0.9; // Start from 20% in from the right edge

        let pathData = `M ${startX},${startY}`; // Start path

        // Update bee position
        setBeePosition({ x: startX, y: startY }); // keep the bee over the start position of the zigzag

        const zigzagCount = 4; // Number of zig-zags
        const segmentHeight = (height - startY) / zigzagCount; // Calculate height of each segment

        for (let i = 0; i < zigzagCount; i++) {
            const y = startY + i * segmentHeight; // Current y position
            const controlPointY = y + segmentHeight / 2; // Middle of the segment

            // Alternating X positions for smoother transitions
            const endX = (i % 2 === 0) ? 0 : width; // Alternating ending X positions

            // Adjust control points for smoother curves
            const cp1X = startX + curveRadius; // Higher control point for softness
            const cp1Y = y + segmentHeight / 3; // Adjusted for smoother transition
            const cp2X = endX - curveRadius; // Lower control point for softness
            const cp2Y = controlPointY - segmentHeight / 3; // Adjusted for smoother transition

            // Create cubic Bézier curve
            pathData += ` C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${y + segmentHeight} `;

            // Update startX for the next segment
            startX = endX; 
        }

        // Finish the path straight down to the bottom left corner
        pathData += ` L 0,${height}`; // Ending at bottom left corner

        setPathData(pathData);
    };

    useEffect(() => {
        updateZigzag();
        window.addEventListener("resize", updateZigzag);

        return () => {
            window.removeEventListener("resize", updateZigzag);
        };
    }, []);

    return (
        <main>
            <div className="wrapper">
                <svg className="Bee_Path" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
                    <path
                        d={pathData}
                        strokeWidth="4"
                        strokeDasharray={`${dashLength},${gapLength}`} 
                        fill="none"
                        stroke="grey"
                        opacity=".4"
                    />
                </svg>
                <img
                    className="Kyles_Bee" 
                    src={Bee_Vet} 
                    alt="Bee"
                    style={{
                        position: 'absolute',
                        left: beePosition.x - 57.5, // Center the image
                        top: beePosition.y - 20, // Center the image
                    }} 
                />
                {/* Add more content here which will overlay the background - USE COMPONENT IMPORTS HERE */}
                    <div className="Bee_Box">
                        <h1>See My Bee?</h1>
                        <h4>Well, actually, it's Kyle's bee.</h4>
                        <br />
                        <h4>He just hangs out here to greet people like yourself.</h4>

                        <h4>While you're here, why don't you take a look around and see what solutions Bee-Dev has to offer</h4>
                        <br />
                        <p>While he's cute, the bee, not Kyle.... His flight path makes things difficult to see and text gets lost in it.</p>
                    </div>
            </div>
        </main>
    );
};

export default FlyingBee;
