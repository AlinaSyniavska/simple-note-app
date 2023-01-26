import React, {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {noteValidator} from "../../validators";
import {INote} from "../../interfaces";
import {noteCategory, noteStatus} from "../../constants";
import "../../index.css";
import {useNavigate} from "react-router-dom";
import {noteActions} from "../../redux";
import {helper} from "../../helpers";

const CreateNoteForm: FC = () => {

    const {register, reset, setValue, handleSubmit, formState: {errors}} = useForm<INote>({
        resolver: joiResolver(noteValidator),
        mode: "all"
    });

    const {
        formErrors,
        noteForUpdate,
    } = useAppSelector(state => state.noteReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [oldCreateNoteDate, setOldCreateNoteDate] = useState<string>('');

    useEffect(() => {
        if (noteForUpdate) {
            const {
                name,
                created,
                category,
                content,
            } = noteForUpdate as INote;

            const dateForForm = new Date(created).toLocaleDateString().split('.').reverse().join('-');

            setValue('name', name);
            setValue('created', dateForForm);
            setValue('category', category);
            setValue('content', content);

            setOldCreateNoteDate(created);
        }

    }, [noteForUpdate])

    const submitForm = async (note: INote) => {
        try {
            if (!noteForUpdate) {

                const newNote = {
                    id: helper.guid(),
                    name: note.name,
                    created: new Date(note.created).toString(),
                    category: note.category,
                    content: note.content,
                    dates: [],
                    noteStatus: noteStatus.ACTIVE,
                }

                dispatch(noteActions.createNote({note: newNote}))
            } else {
                const oldDate = new Date(oldCreateNoteDate).toLocaleDateString();
                const newDate = new Date(note.created).toLocaleDateString();

                const updatedNote = {
                    name: note.name,
                    created: new Date(note.created).toString(),
                    category: note.category,
                    content: note.content,
                    dates: oldDate === newDate
                        ? []
                        : [new Date(oldCreateNoteDate).toString(), new Date(note.created).toString()],
                }

                const {id} = noteForUpdate;
                await dispatch(noteActions.updateNote({id, note: updatedNote}));
            }

            reset();
            navigate('/');
        } catch (e: any) {
            console.log(e.response.data());
        }
    }

    const cleanForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setValue('name', '');
        setValue('created', '');
        setValue('category', '');
        setValue('content', '');
    }

    return (
        <div>
            <h2 className={"formTitle"}>{noteForUpdate ? 'Edit Note' : 'Create New Note'}</h2>

            <form className={"noteForm"} onSubmit={handleSubmit(submitForm)}>
                <label className={"requiredField"}>Note Name</label>
                <input type={'text'} placeholder={'Enter note title  '} {...register('name')}/>
                <div className={"errorBox"}>{errors.name && <span>{errors.name.message}</span>}</div>
                <label className={"requiredField"}>Note Content</label>
                <input type={'text'} placeholder={'Enter note  '} {...register('content')}/>
                <div className={"errorBox"}>{errors.content && <span>{errors.content?.message}</span>}</div>
                <div>Note Category
                    <label>
                        <input type={'radio'} defaultChecked {...register('category')} value={noteCategory.TASK}/>
                        TASK
                    </label>
                    <label>
                        <input type={'radio'} {...register('category')} value={noteCategory.IDEA}/>
                        IDEA
                    </label>
                    <label>
                        <input type={'radio'} {...register('category')} value={noteCategory.RANDOM_THOUGHT}/>
                        RANDOM THOUGHT
                    </label>
                </div>
                <div className={"errorBox"}>{errors.category && <span>{errors.category?.message}</span>}</div>
                <label className={"requiredField"}>Date</label>
                <input type={'date'} {...register('created')}/>
                <div className={"errorBox"}>{errors.created && <span>{errors.created?.message}</span>}</div>
                <div className={"formBtnContainer"}>
                    <button className={"btnSetNote"}>{noteForUpdate ? 'Save Update' : 'Create'}</button>
                    <button className={"btnSetNote"} onClick={(e) => cleanForm(e)}>Clean</button>
                </div>

                <div>
                    <div>{formErrors.noteName && <div>Error note title: {formErrors.noteName[0]}</div>}</div>
                    <div>{formErrors.noteContent && <div>Error note content: {formErrors.noteContent[0]}</div>}</div>
                    <div>{formErrors.noteCreateDate && <div>Error date: {formErrors.noteCreateDate[0]}</div>}</div>
                </div>
            </form>
        </div>
    );
};

export {CreateNoteForm};