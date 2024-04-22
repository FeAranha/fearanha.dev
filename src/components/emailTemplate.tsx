import * as React from 'react'

interface EmailTemplateProps {
  msg: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  msg,
}) => (
  <div>
    <h1>{msg}!</h1>
  </div>
)
