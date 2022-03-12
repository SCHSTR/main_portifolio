import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Body, Container } from '../styles/components'

const Custom404: NextPage = () => {
    return (
        <Body>
            <Head>
                <title>404</title>
            </Head>
            
            <Container>
                <h1>Num tem isso aqui não uai</h1>
            </Container>
        </Body>    
    )
}

export default Custom404