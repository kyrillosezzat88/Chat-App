import { ChangeEvent, useState } from 'react'
import { useChatContext } from 'stream-chat-react'
import { UserList } from './'
import { CloseCreateChannel } from '../assets';

const ChannleNameInput = ({ channelName = '', setChannelName }: any) => {

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        e.preventDefault()
        setChannelName(e.target.value)
    }
    return (
        <div className="channel-name-input__wrapper">
            <p >Name</p>
            <input type="text" onChange={HandleChange} placeholder="channle-name" />
            <p>Add Mmebers</p>
        </div>
    )

}
const CreateChannel = ({ createType, setisCreating }: any) => {
    const [ChannelName, setChannelName] = useState("");
    const { client, setActiveChannel } = useChatContext()
    const [selectedUsers, setselectedUsers] = useState<any>([client.userID || '']);
    const createChannle = async (e: ChangeEvent<any>) => {
        e.preventDefault();
        try {
            const newChannle = await client.channel(createType, ChannelName, { name: ChannelName, members: selectedUsers })
            await newChannle.watch();
            setChannelName("");
            setisCreating(false);
            setselectedUsers([client.userID]);
            setActiveChannel(newChannle)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='create-channel__container'>
            <div className="create-channel__header">
                <p>{createType === 'team' ? "Create New Channle" : "Send a Direct Message"}</p>
                <CloseCreateChannel setIsCreating={setisCreating} setIsEditing={undefined} />
            </div>
            {createType === 'team' && <ChannleNameInput ChannelName={ChannelName} setChannelName={setChannelName} />}
            <UserList setSelectedUsers={setselectedUsers} />
            <div className="create-channel__button-wrapper" onClick={createChannle}>
                <p>{createType === 'team' ? "Create Channle" : 'Create Message Group'}</p>
            </div>
        </div>
    )
}

export default CreateChannel