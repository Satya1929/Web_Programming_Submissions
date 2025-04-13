import PropTypes from 'prop-types'
function Child({ message }) {
    return <p>{message}</p>;
  
}
Child.propTypes = {
    message: PropTypes.string
}
export default Child;