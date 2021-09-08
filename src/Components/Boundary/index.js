import React, {useState}  from 'react'
import { Form } from 'react-bootstrap'

export default function Boundary({boundary, onChange}) {
    const [boundaryInput, setboundaryInput] = useState(boundary)
    const handleChanges = (index, value) => {
        let bi = [...boundaryInput]
        bi[index] = parseInt(value)
        setboundaryInput(bi)
        onChange(bi)
    }

    return (
        <div className="add-dot h-100">
            <b>Boundary</b>
            <Form.Group controlId="boundaryMin">
                <small>Min</small>
                <Form.Control max="-1" value={boundaryInput[0]} type="number" placeholder="Minimum" onChange={(e) => {handleChanges(0, e.target.value)}} />
            </Form.Group>

            <Form.Group controlId="boundaryMax">
                <small>Max</small>
                <Form.Control min="1" value={boundaryInput[1]} type="number" placeholder="Maximum" onChange={(e) => {handleChanges(1, e.target.value)}}/>
            </Form.Group>
        </div>
    )
}
