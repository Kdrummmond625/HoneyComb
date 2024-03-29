import { json } from "express";
import Post from '../models/postSchema.js'
import Report from '../models/reportSchema.js'


// Get all reports

export const getReports = async (req, res) => {
    try {
      const reports = await Report.find({});
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//  Delete a post based on a report
export const deleteReport =  async (req,res) => {
    try {
        const { postId } = req.params;
        await Post.findByIdAndDelete(postId); 
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error in deleteReport', error)
        res.status(500).json({ message: 'Error deleting post'})
    }
}

export const updateReportStatus = async (req, res) => {
    const { reportId } = req.params;
    const { status } = req.body;

    try {
       const updatedReport = await Report.findByIdAndUpdate(reportId, 
        { status: status }, { new: true });

        if (!updatedReport) {
            return res.status(404).json({ message: "Report not found" });
        }
        res.json({ message: "Report updated successfully", report: updatedReport });
    } catch (error) {
        console.error("Error in updateReportStatus", error);
        res.status(500).json({ message: "Error updating report staus", details: error.message });
    }
}

//  Update a category based on a report

export const updateCategory = async (req, res) => {
    const { postId } = req.params;
    const { category } = req.body;

    // Verify the category is one of the allowed categories
    const allowedCategories = ['I Want To Vent', 'I Want To Heal', 'I Won'];
    if (!allowedCategories .includes(category.trim())) {
        return res.status(400).json({ message: 'Invalid category' });
    }

    try {
        const updatedPost = await Post.findByIdAndUpdate( postId, { category: category.trim()}, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error('Error in updateCategory', error);
        res.status(500).json({ message: 'Error updating post' });
    }
}