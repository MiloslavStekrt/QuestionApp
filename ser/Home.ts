import { NextFunction, Request, Response } from 'express';

const UUID = require("uuid").v4;
const Quize = require('./schema/Quize.model')

const router = require("express").Router();

const newUuid = () => {
    return UUID();
}

router.get('/', async (_: Request, s: Response) => {
    s.render("home", {
        Quizes: await Quize.find()
    })
})

router.get('/new/empty', async (_: Request, s: Response) => {
    const quiz = await new Quize({
        author: "Random Guy",
        name: "Name of the quiz",
        questions: [
            {
                title: "Answer one",
                correct: newUuid(),
                answers: [
                    {
                        text: "random Text",
                        uuid: newUuid()
                    },
                    {
                        text: "random answer",
                        uuid: newUuid()
                    },
                    {
                        text: "It was always sexta",
                        uuid: newUuid()
                    }
                ]
            }
        ]
    })
    await quiz.save()
    s.redirect("/");
})

module.exports = router;