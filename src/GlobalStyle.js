import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/colors";

export default createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    scroll-behavior: smooth;
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%


    @include respond(tab-land) { // width < 1200?
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @include respond(tab-port) { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }

    @include respond(phone) { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }
    
    @include respond(big-desktop) {
        font-size: 75%; //1rem = 12, 12/16
    }


}

body {
    box-sizing: border-box;
    font-family: 'Lato';
    font-family: 'Montserrat', sans-serif;
   
    a {
        outline: none !important;
        text-decoration: none !important;
    }
    
}

body::-webkit-scrollbar {
    width: .8em;
    border-radius: 5rem;
  }
   
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  }
   
  body::-webkit-scrollbar-thumb {
    background-color: grey;
    outline: none;
    border-radius: 5rem;
  }

`;
