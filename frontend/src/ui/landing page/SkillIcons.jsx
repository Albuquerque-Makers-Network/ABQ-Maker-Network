import React from "react"
import {Row, Col, Button, Container, Image, Dropdown, DropdownButton} from "react-bootstrap";
import Logo from "../../assets/maker-network-logo.png";
import ThreePrint from "../../assets/icons/skill-icons-3dPrint.svg";

export function SkillIcons() {
    return (
        <>
            <Row>
                <Col xs={4} sm={1} md={1} lg={1} className='text-center'>
                    <Button type='submit' className='bg-transparent border-0'><Image fluid src={ThreePrint} alt='3d Printer Icon' width='100'/></Button>
                    <p>3D Printing</p>
                </Col>
                <Col xs={4} sm={1} md={1} lg={1} className='text-center'>
                    <Button type='submit' className='bg-transparent border-0'><Image fluid src={ThreePrint} alt='3d Printer Icon' width='100'/></Button>
                    <p>3d Printing</p>
                </Col>
                <Col xs={4} sm={1} md={1} lg={1} className='text-center'>
                    <Button type='submit' className='bg-transparent border-0'><Image fluid src={ThreePrint} alt='3d Printer Icon' width='100'/></Button>
                    <p>3d Printing</p>
                </Col>
                <Col xs={4} sm={1} md={1} lg={1} className='text-center'>
                    <Button type='submit' className='bg-transparent border-0'><Image fluid src={ThreePrint} alt='3d Printer Icon' width='100'/></Button>
                    <p>3d Printing</p>
                </Col>
            </Row>
        </>
    )
}