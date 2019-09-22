import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`


html {
  height: 100%;
  font-size: 16px;
  background-color: white;
  width: 100%;
}


body {
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 140%;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  color: #3D3F43;
  word-wrap: normal;
  font-kerning: normal;

  @media (max-width: 1024px) {
    text-align: center;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}

footer,
header,
main,
nav,
section {
  display: block;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
}

nav {
  position: relative;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  width: 35%;
  justify-content: space-between;
  max-height: 100px;
}

h1 {
  font-size: 2.441rem;
  line-height: 130%;
  font-weight: 800;
  text-align: center;
}

.name {
  font-size: 1rem;
  margin-left: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

}

hr {
  box-sizing: content-box;
  display: block;
  margin: 0 auto;
  height: 2px;
  width: 40%;
  margin: 2rem 0 0 0;
  overflow: visible;
  border: none;
  background-color: #2c2c2c;
  opacity: 0.3;
}

footer {
  position: relative;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  padding: 2rem;
  max-height: 100px;
}

ul {
  list-style: none;
  list-style-image: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
}

li {
  z-index: 2;
}

a {
  font-size: 0.8rem;
  font-weight: 700;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #3D3F43;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
}

a:active,
a:hover {
  outline-width: 0;
}


button {
  font-size: inherit;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
}

button:hover,
button:focus {
  background: transparent;
}

button:focus {
  outline: none;
}

button:active {
  background: tranparent;
}

hr {
  @media (max-width: 1024px) {
    display: none;
  }
}

p {
  font-size: 1rem;
}
`