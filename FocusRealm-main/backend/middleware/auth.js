const catchAsyncErrors=require("./catchAsyncError")
const ErrorHander = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
     const  {token}  = req.cookies;
        //    const cookieString = document.cookie
    if (!token) {
        return next(new ErrorHander("Please Login to access this resource", 401));
      }
    
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decodedData.id);

      next();
  });

