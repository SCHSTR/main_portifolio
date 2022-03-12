import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { Navbar, Footer } from '../components/components'
import { Body } from '../styles/components'
import media from '../styles/media'

const Hero = styled.div`
  ${media.desktop`
    height: 80vh;

    .container{
      height: 100%;
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 0px 0px; 
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-content{
      align-self: center;
    }
  `}
`
const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>schstr | ui/ux & motion</title>
    </Head>
    <Body>
      <Navbar />

      <Hero>
        <div className="container">
          <div className="hero-content">
            <h1>Ajudo empreendedores a conseguirem resultados como aquelas cases que você viu na internet 😉🏆</h1>
            <p>Transformo idéias e rascunhos em ferramentas para conversão leads de para sua equipe</p>

            
          </div>
        </div>
      </Hero>

      <Footer />
    </Body>
    </>
  )
}

export default Home
