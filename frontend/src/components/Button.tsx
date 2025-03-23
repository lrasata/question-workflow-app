import {Button as MuiButton} from "@mui/material";
import * as React from "react";

interface props {
    variant?: string;
    fullWidth?: boolean;
    color?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    ariaLabel?: string;
    margin?: number;
}

const Button = ({variant='contained', fullWidth=false, color='primary', onClick, ariaLabel, children, margin} : props) => {
    return <MuiButton
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}
        color={color}
        size='large'
        aria-label={ariaLabel}
        {...(variant !== 'text' && {
            sx: {
            borderRadius: 6,
            border: 1,
            borderColor: color,
                margin: margin
            }
        })}
    >{children}</MuiButton>
}

export default Button;