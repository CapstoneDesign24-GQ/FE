import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle=createGlobalStyle`
    // 적용시킬 css 입력

    ${reset}
    a{
        text-decoration:none;
        color:inderit;
    }
    *{
        box-sizing:border-box;
        margin:0 auto;
    }
    html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,dl,dt,dd,ol,ul,lil,form,label,table{
        margin:0;
        padding:0;
        border:0
        font-size:24px;
        vertical-align:baseline;
    }
    body{
        line-height:1;
        font-family:'Noto Sans Kr',sans-serif;
        background-color:#fff;
        margin-bottom:100px;
    }
    ol,ul{
        list-style:none;
    }
    button{
        border:0;
        background:transparent;
        cursor:pointer;
    }


    display:flex;
    justify-content:center;
    align-item:center;

    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;