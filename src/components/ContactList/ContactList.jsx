export const ContactList = ({ contacts, OnDeleteContact  }) => {

    return (
        <ul>
            {contacts.map(({ name, id, number,  }) => {
                return <li key={id}>{name}: {number}
                    <button type="button" onClick={OnDeleteContact}>Delete</button>
                </li>
            })}
        </ul>
    )
}