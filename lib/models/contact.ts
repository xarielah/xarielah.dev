import mongoose from 'mongoose';
import { ContactModel } from './types/contact.type';

const ContactSchema = new mongoose.Schema<ContactModel>({
  name: String,
  email: String,
  content: String,
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
