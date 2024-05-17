import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <html>
      <body>
        <div>
          <h1>Welcome, {name}!</h1>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </div>
      </body>
    </html>
  )
}
