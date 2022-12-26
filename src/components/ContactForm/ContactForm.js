
export const ContactForm = ( { onSubmit } ) => {

    const handleSubmit = event => {
        event.preventDefault();
        const input = event.currentTarget;
        onSubmit(
            event.target.elements.name.value,
            event.target.elements.number.value
        );
        input.reset();
                
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    name="name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
            
        </div>
    )
}