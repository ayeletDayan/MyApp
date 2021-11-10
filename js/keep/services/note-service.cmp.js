import { utilService } from '../../services/util-service.js';

export const noteService = {
  query,
  remove

};

function query() {
  return notes;
  // return utilService.query(NOTES_KEY);
}

const notes = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby!"
    }
  },
  {
    id: "n102",
    type: "note-img",
    info: {
      img: "img/cats.jpg",
      title: "Bobi and Me"
    },
    style: {
      backgroundColor: "#00d"
    }
  },
  {
    id: "n103",
    type: "note-todos",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 }
      ]
    }
  },
  {
    id: "n104",
    type: "note-txt",
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby!"
    }
  },
  {
    id: "n105",
    type: "note-img",
    info: {
      img: "img/cats2.jpg",
      title: "Bobi and Me"
    },
    style: {
      backgroundColor: "#00d"
    }
  },
  {
    id: "n106",
    type: "note-todos",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 }
      ]
    }
  },
  {
    id: "n107",
    type: "note-txt",
    isPinned: true,
    info: {
      txt: "Have a nice day :-)"
    }
  },
  {
    id: "n108",
    type: "note-video",
    isPinned: true,
    info: {
      url: "https://www.youtube.com/embed/juocv4AtrHo"
    }
  },
];

function remove(noteId) {
  const idx = this.notes.findIndex(note => note.id === noteId);
  this.notes.splice(idx, 1);
  // utilService.saveToStorage(NOTES_KEY, this.notes);
}