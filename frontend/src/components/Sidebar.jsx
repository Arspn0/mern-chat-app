import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

const Sidebar = () => {
    const {getUsers, users, selectedUser, setSelectedUser, isUserLoading} = useChatStore();

    const onlineUsers = [];

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if (isUserLoading) return <div>Loading...</div>

    return (
        <>
            <div>
                Sidebar
            </div>
        </>
    )
}

export default Sidebar