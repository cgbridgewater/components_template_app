import React, { useEffect, useState } from "react";
import Bee_Vet from "./Bee_Vet_No_BG.png";
import FlyingBee_Content from "./FlyingBee_Content";

const FlyingBee = () => {
    const [pathData, setPathData] = useState("");
    const [beePosition, setBeePosition] = useState({ x: 0, y: 0 });

    const curveRadius = 0.06 * window.innerWidth; // Adjusted for softer edges
    const dashLength = 25; // line length
    const gapLength = 25; // gap between lines

    const updateZigzag = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Set startY based on the height of the window
        const startY = width >= 500 ? 200 : 150; // Conditional logic for startY

        let startX = width * 0.9; // Start from 10% in from the right edge

        let pathData = `M ${startX},${startY}`; // Start path

        // Update bee position
        setBeePosition({ x: startX, y: startY - 40 }); // Keep the bee over the start position of the zigzag

        const zigzagCount = 3; // Number of zig-zags
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
    }, [pathData]);

    return (
        <main className="Flying_Bee">
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
            {/* More content here which overlays the background */}
            <FlyingBee_Content />

        </main>
    );
};

export default FlyingBee;
