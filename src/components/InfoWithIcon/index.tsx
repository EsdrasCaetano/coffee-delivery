import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconbg: string;
}

export function InfoWithIcon({ icon, text, iconbg }: InfoWithIconProps) {
    return (
        <InfoWithIconContainer>
            <IconContainer iconbg={iconbg}>{icon}</IconContainer>
            {typeof text === 'string' ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}