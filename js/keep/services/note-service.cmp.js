import { utilService } from '../../services/util-service.js';

export const noteService = {
  query,
  put,
  addNote
};

const NOTES_KEY = 'notes';
_creatNotes()

function query() {
  return utilService.query(NOTES_KEY);
}

function _creatNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack Me Baby!"
        },
        // style: {
        //   backgroundColor: "#00d"
        // }
      },
      {
        id: "n102",
        type: "note-img",
        isPinned: true,
        info: {
          img: "img/cats.jpg",
          title: "Bobi and Me"
        },
        // style: {
        //   backgroundColor: "#00d"
        // }
      },
      {
        id: "n103",
        type: "note-todos",
        isPinned: false,
        info: {
          label: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
          ]
        },
        // style: {
        //   backgroundColor: "#00d"
        // }
      },
      {
        id: "n104",
        type: "note-txt",
        isPinned: false,
        info: {
          txt: "Fullstack Me Baby!"
        },
        // style: {
        //   backgroundColor: "#00d"
        // }
      },
      {
        id: "n105",
        type: "note-img",
        isPinned: false,
        info: {
          img: "img/cats2.jpg",
          title: "Bobi and Me"
        },
        // style: {
        //   backgroundColor: "#00d"
        // },
      },
      {
        id: "n106",
        type: "note-todos",
        isPinned: false,
        info: {
          label: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
          ]
        },
        // style: {
        //   backgroundColor: "#00d"
        // }
      },
      {
        id: "n107",
        type: "note-txt",
        isPinned: false,
        info: {
          txt: "Have a nice day :-)"
        },
        // style: {
        //   backgroundColor: "#00d"
        // }
      },
      {
        id: "n108",
        type: "note-video",
        isPinned: false,
        info: {
          url: "https://www.youtube.com/embed/juocv4AtrHo"
        },
      //   style: {
      //     backgroundColor: "#00d"
      //   }
      },
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}

function put(notes) {
  return utilService.put(NOTES_KEY, notes)
}

function addNote() {
  const noteToAdd = {
    type: '',
    isPinned: false,
    info: {
      txt: ''
    },
    label: '',
    todos: [
      { txt: '', doneAt: Date.now }     
    ],
    img: '',
    title: '',
    url: '',
    style: {
      backgroundColor: 'none'
    }
  }
  return utilService.post(NOTES_KEY, noteToAdd)

}