import ContactButton from './ContactButton'
import { contactData } from '../contactData'

const EmailIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.1.55 4.14 1.59 5.94L.1 24l6.32-1.66a11.86 11.86 0 0 0 5.66 1.44h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.22-6.16-3.44-8.42Zm-8.43 18.3h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.75.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.81 9.81 0 0 1 2.89 7c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.96 8.96 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
  </svg>
)

function ContactActions() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <ContactButton {...contactData.email} icon={<EmailIcon />} variant="email" />
      <ContactButton {...contactData.whatsapp} icon={<WhatsAppIcon />} variant="whatsapp" external />
    </div>
  )
}

export default ContactActions
