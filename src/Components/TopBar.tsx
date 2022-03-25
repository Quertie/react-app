import styled from "@emotion/styled";
import Theme from "../style/theme.ts"

export default function TopBar ()
{
    return <TopBarWrapper>Hello</TopBarWrapper>
}

const TopBarWrapper = styled.div`
    display : flex;
    align-items: center;
    height : 50px;
    background-color : ${Theme.colors.darkblue};
    color : white;
`;