import { NextFunction, Request, Response } from 'express';

const UUID = require("uuid").v4;
const Quize = require('./schema/Quize.model')

const router = require("express").Router();

const newUuid = () => {
    return UUID();
}

router.get('/new', async (_: Request, s: Response) => {
    return s.render("new-quiz")
})

router.get('/s/:id', async (_: Request, s: Response) => {
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
        return s.redirect("/")
    }
    s.render("quiz", {
        quiz: quiz
    })
})

module.exports = router;