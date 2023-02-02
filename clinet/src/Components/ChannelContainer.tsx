import { Channel, useChatContext, MessageSimple } from "stream-chat-react"
import { ChannelInner, CreateChannel, EditChannel, TeamMessages } from './'
const ChannelContainer = ({ isCreating, setisCreating, isEditing, setEditing, createType }: any) => {
    const { channel } = useChatContext();
    if (isCreating) {
        return (
            <div className="channel__container">
                <CreateChannel createType={createType} setisCreating={setisCreating} />
            </div>
        )
    }
    if (isEditing) {
        return (
            <div className="channel__container">
                <EditChannel setEditing={setEditing} />
            </div>
        )
    }
    const EmptyState = () => {
        return (
            <div className="channel-empty__container">
                <p className="channel-empty__first">This is the beginning of your chat history</p>
                <p className="channel-empty__second">send messages, attachemts, links, emojis, and more!</p>
            </div>
        )
    }
    return (
        <div className="channel__container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i): any => <MessageSimple key={i} {...messageProps} />}
            >
                <ChannelInner setIsEditing={setEditing} />
            </Channel>
        </div>
    )
}

export default ChannelContainer