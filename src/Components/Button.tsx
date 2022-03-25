import styled from "@emotion/styled";
import Theme from "../style/theme.ts"

interface ButtonProps{
    text : string;
    onClickCallback : any;
}

export default function Button ({text, onClickCallback}:ButtonProps) {
    return <ButtonWrapper onClick={() => onClickCallback()}>{text}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
    font-family: Corbel;
    text-align : center;
    border-radius : 0px;
    background-color : white;
    border-width: 1px;
    border-color : ${Theme.colors.mintgreen};
    color : ${Theme.colors.darkgray};
    padding : 5px;
`;