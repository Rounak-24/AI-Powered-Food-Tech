import mongoose, { Schema, Document } from 'mongoose';

export interface IFoodItem extends Document {
    user: mongoose.Types.ObjectId;

    name: string;
    category?: string;              // e.g., 'Dairy', 'Produce', 'Meat'
    quantity?: string;              // e.g., '2 lbs', '1 carton'

    createdAt:Date;
    updatedAt:Date;

    expiryDate: Date;
    isEstimatedExpiry: boolean;     // True if the LLM guessed the date
    status: 'AVAILABLE' | 'CONSUMED' | 'WASTED';
    actionDate?: Date;              // The date the item was eaten or thrown away
    source: 'MANUAL' | 'IMAGE' | 'PDF'; // How it was added
    // embedding?: number[];           
}

const foodItemSchema = new Schema<IFoodItem>({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true, 
        index: true 
    },
    name: {
        type: String, 
        required: true 
    },
    category: { type: String },
    quantity: { type: String },
    
    expiryDate: { type: Date, required: true, index: true }, // Indexed for cron job queries
    isEstimatedExpiry: { type: Boolean, default: false },
    
    status: { 
        type: String, 
        enum: ['AVAILABLE', 'CONSUMED', 'WASTED'], 
        default: 'AVAILABLE',
        index: true 
    },
    actionDate: { type: Date },
    
    source: { 
        type: String, 
        enum: ['MANUAL', 'IMAGE', 'PDF'], 
        required: true 
    },
    
    // embedding: { type: [Number], select: false } 
},{timestamps:true});

export const item = mongoose.model<IFoodItem>('item', foodItemSchema);