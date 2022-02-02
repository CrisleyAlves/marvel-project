import './Text.css';

const STYLE_TYPES = {
  success: 'Text--success',
  danger: 'Text--danger',
  warning: 'Text--warning',
}

const Text = ({
  styleType = '',
  children
}) => {
  return <p className={`Text ${STYLE_TYPES[styleType]}`}>{children}</p>
}

export default Text;
