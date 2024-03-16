import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/EmailTemplate";
import { useState } from "react";

// const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

const ContactMe = () => {
  const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
  console.log(resend, import.meta.env.VITE_RESEND_API_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
      text: "",
    });
    console.log(data);
    if (error) {
      // return res.status(400).json(error);
    }

    // res.status(200).json(data);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="relative flex flex-col min-h-screen px-5 md:py-20 md:px-20">
      <h2 className="text-4xl font-bold underline font-poppins">
        Contact with me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-8 md:py-14">
        <form
          onSubmit={onSubmit}
          className="flex flex-col max-w-2xl gap-10 py-7 px-7 backdrop-blur-sm bg-picton-blue-400/30 rounded-xl"
        >
          <div className="flex flex-col md:gap-5 md:flex-row">
            <label className="w-32" htmlFor="name">
              Your name
            </label>
            <input
              className="flex-1 max-w-md px-3 py-2 rounded-lg outline-none"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="flex flex-col md:gap-5 md:flex-row">
            <label className="w-32" htmlFor="email">
              Your email
            </label>
            <input
              className="flex-1 max-w-md px-3 py-2 rounded-lg outline-none"
              type="text"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={onChange}
              name="email"
            />
          </div>
          <div className="flex flex-col md:gap-5 md:flex-row">
            <label className="w-32" htmlFor="message">
              Your message
            </label>
            <textarea
              className="flex-1 max-w-md px-3 py-2 rounded-lg outline-none"
              cols={50}
              rows={10}
              placeholder="Hi..."
              value={formData.message}
              onChange={onChange}
              name="message"
            ></textarea>
          </div>
          <div className="flex justify-end max-w-2xl">
            <button
              type="submit"
              className="px-5 py-3 ml-auto font-bold text-white bg-blue-600 w-fit rounded-3xl"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto text-3xl font-bold">What's next?</h3>
          <h5>
            If you have any suggestion, feedback, opportunity, or are interested
            in collaborating on a project, we would love to hear from you!
            Please feel free to reach out to us using the contact details
            provided below. If you are expecting a reply, kindly mention your
            contact details in your message.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
