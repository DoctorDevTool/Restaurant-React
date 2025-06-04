import './button.css'

const Button = ({className, title}) => {
    return ( 
        <div className={className}>
            <a href="#!" className="button">{title}</a>
        </div>
     );
}
 
export default Button;