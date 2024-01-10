import { useState } from "react";
import "../assets/partiels/contact-form.scss";
import CloseIcon from "@mui/icons-material/Close";

function ContactForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.showPopUp(false);
  };

  return props.trigger ? (
    <div className="contact-form ">
      <div className="container">
        <form
          className="contact-form-inner"
          method="post"
          onSubmit={handleSubmit}
        >
          <h1>
            Ask A<span> QUESTION</span>
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Telephone"
            value={data.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
            value={data.message}
            onChange={handleChange}
          />
          <button type="submit">send</button>
          <CloseIcon onClick={() => props.showPopUp(false)} />
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ContactForm;
