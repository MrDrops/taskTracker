import PropTypes from "prop-types";

const Button = ({color, text, onAdd}) => {

  return (
    <button 
        onClick={onAdd} 
        style={{ backgroundColor: color }}
        className="btn btn-primary"
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button