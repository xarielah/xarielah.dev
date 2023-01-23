import mongoose from 'mongoose';
import { CvModel } from './types/cv.type';

const CvSchema = new mongoose.Schema<CvModel>({
  created_at: Date,
  email: String,
});

export default mongoose.models.CV || mongoose.model('CV', CvSchema);
