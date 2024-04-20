/* eslint-disable react/prop-types */
import logo from '../assets/img/EscudoPeque.svg'

export const Logo = ({text}) => {
    return(
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Task Logo" />
            <span>{text}</span>
        </div>
    )
}