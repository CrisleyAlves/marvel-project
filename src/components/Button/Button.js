import './Button.css';

const STYLE_TYPES = {
  primary: 'Button--primary',
  secondary: 'Button--secondary',
  clean: 'Button--clean',
}

const Button = ({
  styleType = '',
  children,
  ...rest
}) => {
  return <button {...rest} className={`Button ${STYLE_TYPES[styleType]}`}>{children}</button>
}

export default Button;
