const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Phone Number: 900009999</p>
      <p>email: contactfood@email.com</p>
      <form style={{ display: "flex", columnGap: 10 }}>
        <input type="text" placeholder="Search"></input>
        <input type="text" placeholder="Name"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
