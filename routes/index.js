const { Router } = require("express");
const { createChapter, getAllChapters, getChapterById, deleteChapter } = require("../controllers/chapter.controllers");

const router = Router()

router.post('/chapter', createChapter)
router.get('/chapter', getAllChapters)
router.get('/chapter/:id', getChapterById)
router.delete('/chapter/:id', deleteChapter)

module.exports = router