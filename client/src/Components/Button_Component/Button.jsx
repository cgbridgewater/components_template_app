import { Link } from 'react-router-dom';

const Button = ({ to, text }) => {
    
    return (
        <Link className='button_box' to={ to }>
            <button >
                { text }
            </button>
        </Link>
    );
};

export default Button;