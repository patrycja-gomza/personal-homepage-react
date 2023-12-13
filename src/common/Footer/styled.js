import styled from "styled-components";
import { Title, Paragraph } from "../../styles/sharedStyled";

export const StyledFooter = styled.footer`
    max-width: 691px;
    margin-bottom: 109px;
    display: grid;
    grid-template-columns: 1fr;
`;

export const FooterTitle = styled(Title)`
    font-size: ${({ theme }) => theme.fontSize.font32};
    letter-spacing: 1.6px;
    margin: 24px 0;
    text-decoration: none;
`;

export const FooterParagraph = styled(Paragraph)`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    font-size: ${({ theme }) => theme.fontSize.font18};
    letter-spacing: 0.9px;
    margin: 0 21px 56px 0;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 48px);
    grid-gap: 24px;
`;
