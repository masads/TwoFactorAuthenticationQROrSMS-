import { Schema, model } from "mongoose";

const qrSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    code: {
        type: Number,
        required: true
    }
});
const QRCode = model("qr", qrSchema);

export default QRCode;
