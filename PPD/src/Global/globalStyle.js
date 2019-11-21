import { createGlobalStyle } from "styled-components";
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
  color: #3D3F43;
  word-wrap: normal;
  font-kerning: normal;
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
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.9rem;
  height: 100%;
  width: 950px;
  background-color: white;
  max-height: 100px;
  @media(max-width: 950px) {
    width: 100%;
  }
}

h1 {
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 3.157rem;
  line-height: 130%;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.2px;
}

h2 {
  font-size: 2.369rem;
  letter-spacing: 3px;
}


p {
  font-family: 'Merriweather', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 145%;
  font-weight: normal;
  text-align: left;
  letter-spacing: 0.6px;
  color: #4F4F4F;
}

.name {
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 700;
  text-align: center;

}

hr {
  box-sizing: content-box;
  display: block;
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
  color: inherit;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
}

a:active,
a:hover {
  outline-width: 0;
  background-color: #FA9917;
}

button {
  font-size: inherit;
  letter-spacing: 0.4px;
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

input[type="checkbox"] {
  transform: scale(2);
  padding: 5px;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

textarea, ::placeholder, input {
  color: white;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.6px;
}
`;
