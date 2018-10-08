import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            activeLinks: [false, false, false, false, false]
        }
        this.toggleActivate = this.toggleActivate.bind(this)
        
    }

    toggleActivate = i => {
        this.setState(prevState => ({
            activeLinks: prevState.activeLinks.map((link, linkIndex) => i === linkIndex)
        }))
    }

    render() {
        const { activeLinks } = this.state;
        return (
            <div className='navBar'>
                <nav> </nav>
                <nav className='navLinks'>
                    <Link className={`navIcons navIcons0 ${activeLinks[0] ? 'active' : ''}`}
                        to='/'
                        onClick={() => this.toggleActivate(0)}>
                        <i className='fas fa-home'></i>
                    </Link>
                    <Link className={`navIcons navIcons1 ${activeLinks[1] ? 'active' : ''}`}
                        to='/about'
                        onClick={() => this.toggleActivate(1)}>
                        <i className='far fa-user'></i>
                    </Link>
                    <Link className={`navIcons navIcons2 ${activeLinks[2] ? 'active' : ''}`}
                        to='/skills'
                        onClick={() => this.toggleActivate(2)}>
                        <i className='fab fa-superpowers'></i>
                    </Link>
                    <Link className={`navIcons navIcons3 ${activeLinks[3] ? 'active' : ''}`}
                        to='/work'
                        onClick={() => this.toggleActivate(3)}>
                        <i className='fas fa-eye'></i>
                    </Link>
                    <Link className={`navIcons navIcons4 ${activeLinks[4] ? 'active' : ''}`}
                        to='/contact'
                        onClick={() => this.toggleActivate(4)}>
                        <i className='far fa-envelope'></i>
                    </Link>
                </nav>

                <nav className='navMedia'>
                    <a target='_blank' className='navMediaIcons' href='https://github.com/roydensynderen'><i className='fab fa-github'></i></a>
                    <a target='_blank' className='navMediaIcons' href='https://www.linkedin.com/in/roydentshin'><i className='fab fa-linkedin-in'></i></a>
                    <a target='_blank' className='navMediaIcons' href='https://www.instagram.com/roydents/'><i className='fab fa-instagram'></i></a>
                    <a target='_blank' className='navMediaIcons' href='https://www.facebook.com/roydentshin'><i className='fab fa-facebook-f'></i></a>
                    <a target='_blank' className='navMediaIcons' href='https://www.behance.net/gallery/70236755/Map-My-Gene'><i className='fab fa-behance'></i></a>
                </nav>
            </div>
        )
    }
}

export default Nav;