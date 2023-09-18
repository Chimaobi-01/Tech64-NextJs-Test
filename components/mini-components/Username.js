

export default function Username({ item }) {
    const {name, username } = item
    return (
        <td className="tdOne">
            <label className="checkbox"><input type="checkbox" /> <span></span></label>
            <span className="img">
                <img src="https://bit.ly/code-beast" />
            </span>
            <span className="user-detail">
                <p>{name}</p>
                <span> {username} </span>
            </span>
        </td>
    )
}
