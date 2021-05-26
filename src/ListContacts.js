import React,{ Component } from 'react';
class ListContacts extends Component {
    render() {
        console.log(this.props)
        return (
            <ol className="contact-list">
                {this.props.contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                        className="contact-avatar"
                        style={{ backgroundImage: `url(${contact.avatarURL})`}}>
                            </div>
                            <div
                            className="contact-details"
                            >
                                <p>{contact.name}</p>
                                <a href={contact.handle} >@{contact.handle}</a>

                            </div>
                            <button className="contact-remove" >
                                Remove Contact
                            </button>
                    </li>
                ))}
            </ol>
        )
    }
}
export default ListContacts