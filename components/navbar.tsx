import styled from "styled-components"
import media from "../styles/media"

import { useState } from "react"

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5vw;

    .logobox{
        display: block;
        font-size: 2rem;
        transition: all 200ms;

        :hover{
            :after{
                margin-left: 0px;
                content: 'chstr'
            }
        }
    }

    .nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        background-color: rgba(0, 0, 0, .9);
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;

        ${media.desktop`
            height: auto;
            display: block;
            position: relative;
            background-color: transparent;
        `}
        
        a{
            padding: 25px;
            transition: all 300ms;
            :hover{
                color: rgba(255, 255, 255, .4)
            }
        }
    }

    .menu-icon{
        background: none;
        border: none;
        position: absolute;
        right: 5vw;
        width: 25px;
        cursor: pointer;

        .stroke{
            width: 25px;
            height: 2px;
            background: white;
            margin: 4px;
        }

        ${media.desktop`
            display: none;
        `}
    }
`

const Navbar:any = () => {

    const [isOpen, setOpen] = useState(false)

    function mobileNavbarHandler() {
        setOpen(!isOpen)
        console.log(isOpen)
    }

    return(
        <Nav>
            <a href="/" className="logobox">
                s_
            </a>

            <div>
                <div className="nav">
                    <a href="/about">Sobre</a>
                    <a href="/works">Works</a>
                    <a href="/brands">Brands</a>
                    <a href="/contact">Contato</a>
                </div>
                <button onClick={mobileNavbarHandler} className="menu-icon">
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                </button>
            </div>
        </Nav>
    )
}

export default Navbar