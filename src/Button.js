const Button = (props) => {
  const {onClick, text} = props
  return (
    <div style={styles.container} onClick={onClick}>
      {text}
    </div>
  )
}
const styles = {
  container: {
    border: '2px solid steelblue',
    background: 'steelblue',
    color:'white',
    padding:'5px',
    borderRadius:'2px',
    cursor: 'pointer',
    margin: '4px',
    //how to wrap size????
  }
}

export default Button