

export default function Username({ item, checkbox, handleCheckbox }) {
    const { name, username, id } = item
    const letters =  name.split(' ')[0][0] +  name.split(' ')[1][0]
    return (
        <td className="tdOne">
            <label className="checkbox">
                <input type="checkbox" 
                    id={id}
                    checked={checkbox.includes(id)}
                    onChange={ (e) => handleCheckbox(e, id) }
                />
                <span></span>
            </label>
            <span className="img">
                <img src="/placeholder.png" alt={letters} />
            </span>
            <span className="user-detail">
                <p>{name}</p>
                <span> {username} </span>
            </span>
        </td>
    )
}
