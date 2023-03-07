import React from "react"
import {Row, Col, Button, Container, Image, Dropdown, DropdownButton} from "react-bootstrap";
import Logo from "../../assets/maker-network-logo.png";
import ThreePrint from "../../assets/icons/skill-icons-3dPrint.svg";
import Ceramics from "../../assets/icons/skill-icons-ceramics.svg"
import Jewelry from "../../assets/icons/skill-icons-jewelry.svg"
import Laser from "../../assets/icons/skill-icons-laser.svg"
import Metalworking from "../../assets/icons/skill-icons-metalworking.svg"
import Printing from "../../assets/icons/skill-icons-printing.svg"
import ScreenPrint from "../../assets/icons/skill-icons-screenprint.svg"
import Sewing from "../../assets/icons/skill-icons-sewing.svg"
import Welding from "../../assets/icons/skill-icons-welding.svg"
import Woodworking from "../../assets/icons/skill-icons-woodworking.svg"
import "./LandingPage.css"


export function SkillIcons() {

    return (
        <>
            <Container>
                <Row id='skill-icons' className='gap-lg-3'>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={ThreePrint} alt='3d Printer Icon' width='100'/></Button>
                        <p>3d Printing</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Ceramics} alt='Icon of a vase' width='100'/></Button>
                        <p>Ceramics</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Woodworking} alt='Icon of a piece of wood and chisel' width='100'/></Button>
                        <p>Woodwork</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Metalworking} alt='Icon of an anvil' width='100'/></Button>
                        <p>Metalwork</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Welding} alt='Icon of a welding hood and torch' width='100'/></Button>
                        <p>Welding</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Laser} alt='Icon of a laser beam' width='100'/></Button>
                        <p>Laser Cutting</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Printing} alt='Icon of a printer' width='100'/></Button>
                        <p>Printing</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Jewelry} alt='Icon of a Ring' width='100'/></Button>
                        <p>Jewelry Making</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={ScreenPrint} alt='Icon of a t-shirt' width='100'/></Button>
                        <p>Screen Printing</p>
                    </Col>
                    <Col xs={3} md={2} lg={1} className='text-center p-1'>
                        <Button type='submit' className='bg-transparent border-0'><Image fluid src={Sewing} alt='Icon of a spool of thread and sewing needle' width='100'/></Button>
                        <p>Sewing</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}