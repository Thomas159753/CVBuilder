function ContactInput({contact, setContact}) {

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setContact({...contact, [name]: value});
  }

  return (
    <div>
      <label>
          First Name:
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
          Last Name
        <input 
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
          E-mail
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </label>
      <label>
          Phone Number
        <input
          type="tel"
          name="phoneNum"
          value={contact.phoneNum}
          onChange={handleChange}
          pattern="^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$"
        />
      </label>
    </div>
  );
}

export default ContactInput
