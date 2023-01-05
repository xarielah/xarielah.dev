import { ContactFields } from '../types/contact/contact-fields.type';

export async function sendContactRequest(contactFields: ContactFields): Promise<ContactFields> {
  const url = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  return await fetch(`${url}/api/contact`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactFields),
  }).then((res) => res.json());
}
