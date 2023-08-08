import './button.styles.scss';

const Button_type_classes = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: 'default'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${Button_type_classes[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button