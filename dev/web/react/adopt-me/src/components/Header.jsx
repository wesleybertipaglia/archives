import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="border-b py-3 px-6">
            <div className="container max-w-5xl mx-auto">
                <Link
                    to="/"
                    className="font-bold flex gap-2 items-center hover:underline decoration-wavy"
                >
                    <FontAwesomeIcon icon={faPaw} />
                    <span>Adopt Me!</span>
                </Link>
            </div>
        </header>
    )
}

export default Header
