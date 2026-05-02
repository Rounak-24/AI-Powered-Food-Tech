import mongoose, { Schema, Document } from 'mongoose';

export interface IUpload extends Document {
    user: mongoose.Types.ObjectId;
    public_id: string;
    resource_type: 'image' | 'raw';
    url: string;
}

const uploadSchema = new Schema<IUpload>({
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    public_id: { type: String, required: true },
    resource_type: { type: String, enum: ['image', 'raw'], required: true },
    url: { type: String, required: true },
}, { timestamps: true });

export const Upload = mongoose.model<IUpload>('Upload', uploadSchema);