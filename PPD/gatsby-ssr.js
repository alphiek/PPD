import React from 'react'
import Layout from './src/components/layout'
import { GlobalStyle } from "./src/global/globalStyle"

require('typeface-open-sans')
require('typeface-kaushan-script')


export const wrapPageElement = ({ element }) => {
    if (typeof window !== "undefined") {
        require("smooth-scroll")('a[href*="#"]')
    }
    return (
        <>
            <GlobalStyle />
            <Layout>{element}</Layout>
        </>
    )
}

