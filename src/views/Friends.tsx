import Friend from "../Components/Friend"
import { FriendsList } from "../data/Index"

interface IProps {

}
const FriendsPage = ({ }: IProps) => {

  // ----------- render -----------
  const RenderFriendList = FriendsList.map(friend => <Friend key={friend.name} {...friend} />)
  return (
    <>
    <h1 className="text-4xl font-bold mb-6">Friends:</h1>
    <main className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {RenderFriendList}
    </main>
    </>

  )
}

export default FriendsPage