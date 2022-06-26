import React from 'react'
import { ReactComponent as User } from '../assets/User.svg'
import { ReactComponent as Notif } from '../assets/Notif.svg'
import { ReactComponent as Chat } from '../assets/Chat.svg'
import UserPopUp from './UserPopUp'
import { auth } from '../Firebase'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    const { status, signIn, signOut } = props;
    const [userPopUp, setUserPopUp] = React.useState(false)
    function getEmail() {
        return auth.currentUser.email;
    }

    return (
        <div className="nav">
            <div className="lheader">
                <img className="logo" src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/275109346_1577887262572313_2738524034509449148_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=SX3wgBFpjSIAX9rlihz&_nc_ht=scontent.fmnl9-1.fna&oh=00_AT_8M_LSpSui4dVGuKhS07hpEig_ESQyrRymn2Wq3tnujQ&oe=62B9BE9A" />
                <div className="nav--links">
                    <div className="nav--content">Find jobs</div>
                    <div className="nav--content">Company reviews</div>
                    <div className="nav--content">Find salaries</div>
                </div>
            </div>
            <div className="lheader">
                {!status ?
                    <div className="nav--links">
                        <div className="nav--content">Create your profile</div>
                        <div className="nav--content signin" onClick={signIn}>Sign in</div>
                        <div className='line'></div>

                        <div className="postjob">Employers / Post job</div>
                    </div>
                    :
                    <div className="nav--links">
                        <div className="nav--content nav--logo">
                            <Chat className='chatLogo svglogo' />
                        </div>
                        <div className="nav--content nav--logo">
                            <Notif className='bellLogo svglogo' />
                        </div>
                        <div className="nav--content nav--logo" onClick={() => setUserPopUp(state => !state)}>
                            <User className='userLogo svglogo' />
                        </div>
                        {userPopUp && <><div className='tri'></div> <UserPopUp email={getEmail()} signOut={signOut} setUserPopUp={setUserPopUp} /></>}
                        <div className='line'></div>
                        <div className="postjob"><Link to="/test">Employers / Post job</Link></div>
                    </div>
                }
            </div>

        </div>
    )
}

export default Nav