import Joi from "joi";
import {noteCategory, noteStatus} from "../constants";

const noteValidator = Joi.object({
    name: Joi.string().required(),
    content: Joi.string().required(),
    created: Joi.date().required(),
    category: Joi.valid(...Object.values(noteCategory)).required(),
    noteStatus: Joi.valid(...Object.values(noteStatus)),
    dates: Joi.array().items(Joi.string()),
});

export {
    noteValidator,
}