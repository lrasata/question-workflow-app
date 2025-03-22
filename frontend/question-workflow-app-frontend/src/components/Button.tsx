import {Button as MuiButton} from "@mui/material";
import * as React from "react";

interface props {
    variant?: string;
    fullWidth?: boolean;
    color?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    ariaLabel?: string;
}

const Button = ({variant='contained', fullWidth=false, color='primary', onClick, ariaLabel, children} : props) => {
    return <MuiButton
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}
        color={color}
        size='large'
        aria-label={ariaLabel}
        {...(variant !== 'text' && {
            sx: {
            borderRadius: 3,
            border: 2,
            borderColor: color}
        })}
    >{children}</MuiButton>
}

export default Button;