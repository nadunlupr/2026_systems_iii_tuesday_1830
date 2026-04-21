import { useUser } from "../context-demo/UserProvider"

export default function UserProfile(props) {
    const userFromContext = useUser();
    return(
        <div>
            {userFromContext.name}
        </div>
    )
}