const chaptersContainer = document.querySelector('.chapters')
const API_URL = 'http://localhost:3000/api'

const form = document.querySelector('form')

form.addEventListener('submit', async event => {
    event.preventDefault()

    const formData = new FormData(form)
    const entries = formData.entries()
    const chapter = Object.fromEntries(entries)

    const json = JSON.stringify(chapter)

    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: json
    })
    location.assign('/')
})

const fetchChapters = async () => {
    const response = await fetch(API_URL)
    const chapters = await response.json()
    createChaptersDOM(chapters)
}

fetchChapters()

const createChaptersDOM = (chapters) => {
    const chaptersNodes = chapters.map(chapter => {
        const chapterNode = document.createElement('div')
        chapterNode.classList.add('chapter')
        chapterNode.innerHTML = `
                            <h2>${chapter.title}</h2>
                            <p class="number-of-chapter"></p>
                            <div class="article-actions">
                                <button class="btn btn-danger" data-id="${chapter.id}">Supprimer</button>
                            </div>  
        `
        return chapterNode
    })

    chaptersContainer.innerHTML = ''
    chaptersContainer.append(...chaptersNodes)

    const deleteBtns = chaptersContainer.querySelectorAll('.btn-danger')
    deleteBtns.forEach(button => {
        button.addEventListener('click', async event => {
            const idChapter = event.target.dataset.id
            await fetch(`${API_URL}/${idChapter}`, {
                method: 'DELETE'
            })
            fetchChapters()
        })
    })
}

