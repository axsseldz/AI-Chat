/*

  This middleware is meant for wrapping functions,
  so we don't have to use try-catch in every single async function we code

*/
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = asyncWrapper