import { NextFunction, Request, Response } from 'express';

const UUID = require("uuid").v4;
const Quize = require('./schema/Quize.model')

const router = require("express").Router();

const newUuid = () => {
    return UUID();
}

router.get('/:id', async (_: Request, s: Response) => {
    let quiz = {
        name: "Quiz is not finded",
        questions: [
            {
                correct: ""
            }
        ]
    };
    try {
        quiz = await Quize.findById(_.params.id);
        quiz.questions.map(question => {
            question.correct = "Sorry this is secreat for you.";
        })
    } catch (CastError) {
        s.redirect("/")
    }
    s.render("quiz", {
        quiz: quiz
    })
})

router.post('/new', async (_: Request, s: Response) => {

})

module.exports = router;