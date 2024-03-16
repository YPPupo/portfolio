import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Portfolio Request Message</h1>
    <p>
      Hello my name is {name} and my email is {email}
    </p>
    <br />
    <p>{message}</p>
  </div>
);
