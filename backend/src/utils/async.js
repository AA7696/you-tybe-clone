const asyncHandeler = (fn) => async (req,res,next) => {
    try {
        await fn(req, res,next)
    } catch (error) {
        res.status(err.code || 500).json({success: false, msg: error.message})
    }
}

export {asyncHandeler}