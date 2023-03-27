import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser/* , setCurrentUser */ } = useContext(UserContext);

    /* const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    } */

    return (
        <Fragment> {/* used instead of div bcs div have no purpose other than being parent */}
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'> {/* anchor tag but better? */}
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to='/authentication'> {/* anchor tag but better? */}
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;