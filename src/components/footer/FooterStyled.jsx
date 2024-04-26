import styled from "styled-components";

const FooterStyled = styled.div`

@media screen and (min-width: 976px) {
    #content{
        margin-left: 250px;
    }       
}

/* Tela para tablet */
@media screen and (min-width: 768px) and (max-width: 975px){
    #content{
        align-items: center;
    }
    #redes{
        justify-content: center;
    }
}

/* Tela para celular */
@media screen and (max-width: 767px){
    #content{
        align-items: center;
    }
    #redes{
        justify-content: center;
    }
}    


background-color: var(--card-color);
height: 274px;

#content{
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 35px;
}

#email{
    display: flex;
    gap: 5px;
    align-items: center;
}

h2{
    font-family: var(--poppins);
    color: var(--primary-color);
    font-weight: bold;
    font-size: 23.53px;
}

a{
    font-family: var(--poppins);
    color: var(--secondary-text);
    font-weight: 300;
    font-size: 14.12px;
    text-decoration: none;
}
#contatos{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

#redes{
    display: flex;
    gap: 15px;
}
.rede{
    font-size: 30px;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
}
.iconEmail{
    font-size: 12px;
    color: var(--primary-color);
}

#email a:hover{
    text-decoration: underline;
}

.instagram:hover{
    background: linear-gradient(45deg, #F09433, #E6683C, #DC2743, #CC2366, #BC1888, #962EA6, #7646BC, #6157C6, #4E68D1, #0080FF);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.linkedin:hover{
    background: linear-gradient(to right, #0077B5, #005E93);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.github:hover{
    background: var(--primary-gradient);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
`

export default FooterStyled;