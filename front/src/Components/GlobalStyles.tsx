import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    .container{
        width:100%;
        max-width:1100px;
        margin:0 auto;
        padding:68px 20px 20px;
        box-sizing:border-box;
    }
`;

export default globalStyles;