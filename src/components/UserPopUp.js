import { ReactComponent as Profile } from '../assets/Profile.svg'
import { ReactComponent as Heart } from '../assets/Heart.svg'
import { ReactComponent as Reviews } from '../assets/Reviews.svg'
import { ReactComponent as Email } from '../assets/Email.svg'
import { ReactComponent as Settings } from '../assets/Settings.svg'
import { ReactComponent as Help } from '../assets/Help.svg'

const UserPopUp = (props) => {
    return (
        <div className="popup">
            <div className="popup--email">{props.email}</div>
            <div className="popup--content"><Profile className='popup--svg svglogo'/><div>Profile</div></div>
            <div className="popup--content"><Heart className='popup--svg svglogo'/><div>My jobs</div></div>
            <div className="popup--content"><Reviews className='popup--svg svglogo'/><div>My reviews</div></div>
            <div className="popup--content"><Email className='popup--svg svglogo'/><div>Email settings</div></div>
            <div className="popup--content"><Settings className='popup--svg svglogo'/><div>Settings</div></div>
            <div className="popup--content"><Help className='popup--svg svglogo'/><div>Help Center</div></div>
            <hr></hr>
            <div className='signout' onClick={() => {
                props.signOut()
                props.setUserPopUp(false)
            }}>Sign Out</div>
        </div>
    )
} 

export default UserPopUp