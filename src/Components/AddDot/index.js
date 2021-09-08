import React, {useState}  from 'react'
import { Button, Form } from 'react-bootstrap'

export default function AddDot({minBoundary, maxBoundary, onSubmit}) {
    const [dotColor, setdotColor] = useState("")
    const [dotSize, setdotSize] = useState(1)
    const [dotPosition, setdotPosition] = useState(0)
    const [error, setError] = useState("")

    const handleCreateDot = (e) => {
        e.preventDefault()
        let flag = true
        if(dotSize < 0 || dotSize > 10){
            setError("Dot size must be 1-10")
            flag = false
        } else if(dotPosition < minBoundary || dotPosition > maxBoundary){
            setError(`Dot size must be ${minBoundary +" - "+ maxBoundary}`)
            flag = false
        } else if(dotColor.length === 0) {
            setError("Please select dot color!")
            flag = false
        } else{
            setError("")
        }
        if(flag){
            onSubmit({
                color: dotColor,
                size: dotSize,
                position: dotPosition
            })
            clearInput()
        }
    }

    const clearInput = () => {
        setdotColor("")
        setdotSize(1)
        setdotPosition(0)
    }

    return (
        <div className="add-dot">
            <Form onSubmit={handleCreateDot}>
                {
                    error != null && <small className='text-danger'>{error}</small>
                }
                <Form.Group controlId="formSelectDotColor">
                    <Form.Control value={dotColor} as="select" onChange={(e) => {setdotColor(e.target.value)}}>
                        <option value="" disabled>--- Select Color ---</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSelectDotSize">
                    <small>Size</small>
                    <Form.Control min="1" value={dotSize} type="number" placeholder="Size" onChange={(e) => {setdotSize(e.target.value)}} />
                </Form.Group>

                <Form.Group controlId="formSelectDotPosition">
                    <small>Position</small>
                    <Form.Control min={minBoundary} max={maxBoundary} value={dotPosition} type="number" placeholder="Position" onChange={(e) => {setdotPosition(e.target.value)}}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Dot
                </Button>
            </Form>
        </div>
    )
}
