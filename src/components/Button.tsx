import {Button as MuiButton, ButtonProps} from "@mui/material";

interface CustomProps {
    ariaLabel?: string;
    margin?: number;
}
const Button = (props: ButtonProps & CustomProps) => {
    const { variant, onClick, color, children, ariaLabel, fullWidth, margin} = props
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