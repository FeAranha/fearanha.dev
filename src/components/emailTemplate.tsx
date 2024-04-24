import * as React from 'react'

interface EmailTemplateProps {
  subject: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  subject,
  email,
  message,
}) => (
  <div>
    <ul>
      <li>
        <strong>Name:</strong> {subject}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Message:</strong> {message}
      </li>
    </ul>
  </div>
)
