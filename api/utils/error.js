export const createError = (status, message) => {
    const err = new Error()
    err.status = status
    err.message = message
    return err
}

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessaage = err.message || 'Something went wrong'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessaage,
        stack: err.stack
    })
})