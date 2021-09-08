import React, {useRef, useEffect} from 'react'

export default function CanvasScreen({boundary, dots}) {
    let total_line_length = Math.abs(boundary[0]) + Math.abs(boundary[1]);
    let lengthPercent = 100 / total_line_length;
    const canvasRef = useRef(null)

    const drawLine = () => {
        const canvasObj = canvasRef.current
        const canvasContext = canvasObj.getContext("2d");
        canvasContext.clearRect(0, 0, canvasObj.width, canvasObj.height);
        canvasContext.beginPath();
        canvasContext.moveTo(10, canvasObj.height/2);
        canvasContext.lineTo(canvasObj.width-10, canvasObj.height/2);
        canvasContext.stroke();
        console.log("test");
    }

    const drawDots = () => {
        const canvasObj = canvasRef.current
        const canvasContext = canvasObj.getContext("2d");
        let paddingSize = 10;
        let lineWidth = canvasObj.width-20;
        console.log("test2");
        
        if(dots.length){
            dots.forEach(dot => {
                let dotDistanceFromLeftBoundary =  Math.abs(boundary[0] - dot.position)
                let distancePercentage = dotDistanceFromLeftBoundary * lengthPercent
                let positionOnLine = (lineWidth * distancePercentage) / 100
                console.log("dot -->", dotDistanceFromLeftBoundary, distancePercentage , positionOnLine, lineWidth)
                canvasContext.beginPath();
                canvasContext.arc(positionOnLine+paddingSize, canvasObj.height/2, dot.size * 5, 0, 2 * Math.PI);
                canvasContext.fillStyle = dot.color == "green" ? "#28a745ad" : "#dc35459c";
                canvasContext.fill();
            });
        } else {
            clearCanvas()
        }
    }

    const clearCanvas = () => {
        drawLine()
    }

    useEffect(() => {
        drawLine()
    },[])
    
    useEffect(() => {
        drawDots()
    },[drawDots])
    return (
        <div>
            <canvas 
                className="canvas-app"
                width={window.innerWidth*0.6} height="200"
                ref={canvasRef}
            />
        </div>
    )
}
