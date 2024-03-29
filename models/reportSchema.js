import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  // Reference to the user who filed the report
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  // Reference to the post or comment being reported
  reportedItem: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  reportedItemType: {
    type: String,
    required: true,
    enum: ['Post', 'Comment'], // Extend this list based on your application's needs
  },
  // Reason for the report
  reason: {
    type: String,
    required: true,
    enum: ['Spam', 'Inappropriate Content', 'Harassment', 'Other'],
  },
  // Additional details provided by the reporting user
  details: {
    type: String,
    required: false, // This can be optional
  },
  // Date when the report was filed
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Report status (e.g., 'Pending', 'Reviewed', 'Resolved')
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Reviewed', 'Resolved'],
    default: 'Pending',
  }
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
