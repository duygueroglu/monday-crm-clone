import blankAvatar from '../images/blank-avatar.png'

const AvatarDisplay = ({ticket}) => {
    return (
        <div className="avatar-container">
            <div className="img-container"></div>
            <img src={ticket.avatar ? ticket.avatar:blankAvatar} alt={'photo of ' + ticket.owner}/>
        </div>
    )
}

export default AvatarDisplay