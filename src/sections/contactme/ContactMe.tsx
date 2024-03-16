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
    <div className="min-h-screen relative py-20 px-20 flex flex-col">
      <h2 className="font-poppins font-bold text-4xl underline">
        Contact with me
      </h2>
      <div className="grid grid-cols-2">
        <div className="py-14">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-10 max-w-2xl py-7 px-7 backdrop-blur-sm bg-picton-blue-400/30 rounded-xl"
        >
          <div className="flex gap-5">
            <label className="w-32" htmlFor="">
              Your name
            </label>
            <input
              className="outline-none py-2 px-3 rounded-lg flex-1 max-w-md"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="flex gap-5">
            <label className="w-32" htmlFor="">
              Your email
            </label>
            <input
              className="outline-none py-2 px-3 rounded-lg flex-1 max-w-md"
              type="text"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={onChange}
              name="email"
            />
          </div>
          <div className="flex gap-5">
            <label className="w-32" htmlFor="">
              Your message
            </label>
            <textarea
              className="outline-none py-2 px-3 rounded-lg flex-1 max-w-md"
              cols={50}
              rows={10}
              placeholder="Hi..."
              value={formData.message}
              onChange={onChange}
              name="message"
            ></textarea>
          </div>
          <div className="max-w-2xl flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 w-fit px-5 py-3 rounded-3xl text-white font-bold ml-auto"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        <div className="flex flex-col gap-5">
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
