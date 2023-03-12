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
        <Container id="portfolio-setting" className="mt-5 my-3 p-4 rounded-4">
            <h2 className='my-3'>Portfolio</h2>
        <div className="App">
            <h4 className='my-3'>Add Image:</h4>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
        </Container>
    </>
    );
}
