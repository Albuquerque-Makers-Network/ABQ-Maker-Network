import React, { useState } from "react";
import {Container, Col, Row} from "react-bootstrap";

export function PhotoUpload() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
    <>
        <Container className="bg-light border mt-5 rounded-4">
        <div className="App">
            <h1>Add Image:</h1>
            <input type="file" onChange={handleChange} />
            <img src={file} />

        </div>
        </Container>
    </>
    );
}
