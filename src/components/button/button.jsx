import './button.css'

const alertMessage = () => {
    alert('Eu sou homem de ferro.');
} 

const Button = (props) => {
    return (
     <>
        <button className='btn' onClick={alertMessage}>{props.label}</button>
     </>
    )
}

export default Button;