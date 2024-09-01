import Friend from "../Components/Friend"
import Modal from "../Components/ui/Dialog"
import { FriendsList } from "../data/Index"
import { useState } from 'react'

interface IProps {

}
const FriendsPage = ({ }: IProps) => {

  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  // ----------- render -----------
  const RenderFriendList = FriendsList.map(friend => <Friend key={friend.name} {...friend} />)
  return (
    <>

      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-6">Friends:</h1>
        <button onClick={open} className="fotn-bold text-xl bg-blue-700 text-white rounded-md py-2 px-4 opacity-80 hover:opacity-100">Add Friend</button>
      </div>
      <main className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {RenderFriendList}
      </main>
      <Modal isOpen={isOpen} close={close} title={"Add New Friend"} desc={'Add Friend You Love Him'} >
        <button className="text-white bg-blue-600 py-1 px-2 rounded-md">add</button>
      </Modal>
    </>

  )
}

export default FriendsPage