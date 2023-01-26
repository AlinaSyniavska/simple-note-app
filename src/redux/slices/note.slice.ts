import {createSlice} from "@reduxjs/toolkit";

import {INote} from "../../interfaces";
import {helper} from "../../helpers";
import {noteCategory, noteStatus} from "../../constants";

interface IState {
    notes: INote[],
    noteForUpdate: null,
    formErrors: any,
}

const initialState: IState = {
    notes: [
        {
            id: helper.guid(),
            name: 'Shopping List',
            created: new Date(Date.now()).toString(),
            category: noteCategory.TASK,
            content: 'Milk, cheese, cakes',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'Health Hackathon',
            created: new Date(Date.now()).toString(),
            category: noteCategory.RANDOM_THOUGHT,
            content: 'Health Hackathon is an event where you will solve challenges and create new innovative products for health and healthcare!',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'New Travel',
            created: new Date(Date.now()).toString(),
            category: noteCategory.IDEA,
            content: 'New Travel',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'Dynamic Talks',
            created: new Date(Date.now()).toString(),
            category: noteCategory.IDEA,
            content: 'The event will be held in English',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'Books',
            created: new Date(Date.now()).toString(),
            category: noteCategory.TASK,
            content: 'JavaScript for impatient programmers',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: ' Webinar “Devops — More than the tools and tech”',
            created: new Date(Date.now()).toString(),
            category: noteCategory.TASK,
            content: 'Developers Shore are announcing a webinar — “Devops — More than the tools and tech” with Martin Comstedt',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'NASA Open APIs',
            created: new Date(Date.now()).toString(),
            category: noteCategory.TASK,
            content: 'View NASA Open APIs',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
    ],
    noteForUpdate: null,
    formErrors: {},
};

const noteSlice = createSlice({
    name: 'noteSlice',
    initialState,
    reducers: {
        deleteNote: (state, action) => {
            const note = action.payload.note;
            const index = state.notes.findIndex(item => item.id === note.id);
            state.notes.splice(index, 1);
        },

        zipNote: (state, action) => {
            const note = action.payload.note;
            const index = state.notes.findIndex(item => item.id === note.id);
            state.notes[index].noteStatus = noteStatus.ARCHIVED;
        },

        unZipNote: (state, action) => {
            const note = action.payload.note;
            const index = state.notes.findIndex(item => item.id === note.id);
            state.notes[index].noteStatus = noteStatus.ACTIVE;
        },

        createNote: (state, action) => {
            const note = action.payload.note;
            state.notes.push(note);
        },

        setNoteForUpdate: (state, action) => {
            state.noteForUpdate = action.payload.note;
        },

        updateNote: (state, action) => {
            const updatedNote = action.payload.note;
            const idNote = action.payload.id;
            const index = state.notes.findIndex(item => item.id === idNote);
            state.notes[index] = Object.assign(state.notes[index], {...updatedNote});
            state.noteForUpdate = null;
        },

        cleaningUpdateNote: (state) => {
            state.noteForUpdate = null;
        },
    },

});

const {reducer: noteReducer, actions: {cleaningUpdateNote, createNote, deleteNote, setNoteForUpdate, zipNote, unZipNote, updateNote}} = noteSlice;

const noteActions = {
    cleaningUpdateNote,
    createNote,
    deleteNote,
    setNoteForUpdate,
    zipNote,
    unZipNote,
    updateNote,
};

export {
    noteActions,
    noteReducer,
}
