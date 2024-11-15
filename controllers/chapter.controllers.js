const { Chapter } = require("../database/Chapter.model")

module.exports.createChapter = async (req, res, next) => {
    try {
        const body =  req.body
        const newChapter = new Chapter({
            ...body
        })
        await newChapter.save()
        return res.jsonSuccess(newChapter, 201)
    } catch (error) {
        next(error)
    }
}

module.exports.getChapterById = async (req, res, next) => {
    try {
        const { id } = req.params
        const chapter = await Chapter.findById(id)
        if (!chapter) return res.jsonError(
            `No chapter available with id: ${id}`,
            404
        )
        return res.jsonSuccess(chapter, 200)
    } catch (error) {
        next(error)
    }
}

module.exports.getAllChapters = async (req, res, next) => {
    try {
        const chapters = await Chapter.find()
        return res.jsonSuccess(chapters, 200)
    } catch (error) {
        next(error)
    }
}

module.exports.deleteChapter = async (req, res, next) => {
    try {
        const { id } = req.params
        await Chapter.deleteOne(id)
        return res.jsonSuccess(null, 204)
    } catch (error) {
        next(error)
    }
}