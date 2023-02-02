import { useState, ChangeEvent } from 'react';
import { useChatContext } from 'stream-chat-react';
import { UserList } from './'
import { CloseCreateChannel } from '../assets';

const ChannleNameInput = ({ channelName = '', setChannelName }: any) => {
    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setChannelName(e.target.value)
    }
    return (
        <div className="channel-name-input__wrapper">
            <p >Name</p>
            <input type="text" value={channelName} onChange={HandleChange} placeholder="channle-name" />
            <p>Add Mmebers</p>
        </div>
    )

}

const EditChannel = ({ setEditing }: any) => {
    const { channel }: any = useChatContext()
    const [channelName, setChannelName] = useState<any>(channel?.data?.name);
    const [selectedUsers, setSelectedUsers] = useState<any>([]);
    const UpdateChannle = async (e: ChangeEvent<any>) => {
        e.preventDefault();
        const nameChanged = channelName !== (channel.data.name || channel.data.id);

        if (nameChanged) {
            await channel.update({ name: channelName }, { text: `Channel name changed to ${channelName}` });
        }

        if (selectedUsers.length) {
            await channel.addMembers(selectedUsers);
        }

        setChannelName(null);
        setEditing(false);
        setSelectedUsers([]);
    }
    return (
        <div className='edit-channel__container'>
            <div className="edit-channel__header">
                <p>Edit channel</p>
                <CloseCreateChannel setIsEditing={setEditing} setIsCreating={undefined} />
            </div>
            <ChannleNameInput channelName={channelName} setChannelName={setChannelName} />
            <UserList setSelectedUsers={setSelectedUsers} />
            <div className="edit-channel__button-wrapper" onClick={UpdateChannle}>
                <p>Save Changes</p>
            </div>
        </div>
    )
}

export default EditChannel