module.exports = {
    requireAuthintication : (req , res , next) => {
        console.log('middleware done!')
        next()
    },
    logger : (req , res , next) => {
        console.log(req.method + ' ' + req.originalUrl)
        next()
    }
}