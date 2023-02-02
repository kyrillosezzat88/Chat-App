import { useChatContext, Avatar } from "stream-chat-react"
const TeamChannelPreview = ({ channel, type, setToggleContainer, setisCreating, setEditing, setActiveChannel }: any) => {
    const { channel: activeChannel, client } = useChatContext()
    const ChannelPreview: any = () => (
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id || 'no'}
        </p>
    )
    const DirectPreview = () => {
        const members: any = Object.values(channel.state.members).filter(({ user }: any) => user.id !== client.userID);
        return (
            <div className="channel-preview__item single">
                <Avatar image={members[0]?.user?.image} name={members[0]?.user?.fullName} size={24} />
                <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
            </div>
        )
    }
    return (
        <div className={
            channel?.id === activeChannel?.id
                ? "channel-preview__wrapper__selected"
                : "channel-preview__wrapper"
        }
            onClick={() => {
                setisCreating(false)
                setEditing(false);
                setActiveChannel(channel)
                if (setToggleContainer) {
                    setToggleContainer((prevState: any) => !prevState)
                }
            }}
        >
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    )
}

export default TeamChannelPreview