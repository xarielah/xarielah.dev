import { EmailInput } from '../../components/pages/cv/form';
import { ContactFields } from '../types/contact/contact-fields.type';
const URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function sendContactRequest(contactFields: ContactFields): Promise<ContactFields> {
  return await fetch(`${URL}/api/contact`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactFields),
  }).then((res) => res.json());
}

export async function sendCvRequest(cvFields: EmailInput): Promise<void> {
  return await fetch(`${URL}/api/cv`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cvFields),
  }).then((res) => res.json());
}
