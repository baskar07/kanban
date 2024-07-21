const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const Board = require('../models/boardModels');
const ErrorHandler = require('../utils/errorHandler');

exports.createBoard =asyncErrorHandler(async(req,res,next)=>{
    
    try {
        const boardsCount = await Board.countDocuments();
        const board = await Board.create({
            position: boardsCount > 0 ? boardsCount : 0
        });

        res.status(200).json({
            success:true,
            board
        });
    } catch (error) {
        return next(new ErrorHandler(error.message,400));
    }
    
});