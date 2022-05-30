import '../styles/navbar.css'
export default function Navbar () {
    return (
        <div className='nav--div'>
            <img></img>
            <nav>
                <ul className='nav--nav-links'>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Skills</a>
                    </li>
                    <li>
                        <a href='#'>Projects</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className='nav--resume'><button className='nav--resume-button'>Resume</button></div>
        </div>
    )
}