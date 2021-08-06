//express변수에 express파일 들고오기
//router변수에 express파일의 router함수 넣기
const express = require('express');
const router = express.Router();
const books = require('../model/books');

//라우터 함수를 모듈로 내보내기
module.exports = router;

router.get('/',(req, res) =>{
    let briefs = []
    books.forEach(element => {
        let {bookId, title, author, cover} = element
        briefs.push({bookId, title, author, cover})
    });
    res.json(briefs)
    })

router.get('/:bookId', (req, res) => {
    const bookId = req.params.bookId
    let book = books.find(element => element.bookId == bookId)
    res.json(book)
})