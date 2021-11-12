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
        style: {
          backgroundColor: "pink"
        }
      },
      {
        id: "n102",
        type: "note-img",
        isPinned: true,
        info: {
          img: "img/cats.jpg",
          title: "Bobi and Me"
        },
        style: {
          backgroundColor: "yellow"
        }
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
        style: {
          backgroundColor: "#green"
        }
      },
      {
        id: "n104",
        type: "note-txt",
        isPinned: false,
        info: {
          txt: "Fullstack Me Baby!"
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n105",
        type: "note-img",
        isPinned: false,
        info: {
          img: "img/cats2.jpg",
          title: "Bobi and Me"
        },
        style: {
          backgroundColor: "grey"
        },
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
        style: {
          backgroundColor: "orange"
        }
      },
      {
        id: "n107",
        type: "note-txt",
        isPinned: false,
        info: {
          txt: "Have a nice day :-)"
        },
        style: {
          backgroundColor: "red"
        }
      },
      {
        id: "n108",
        type: "note-video",
        isPinned: false,
        info: {
          url: "https://www.youtube.com/embed/juocv4AtrHo"
        },
        style: {
          backgroundColor: "purple"
        }
      },
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}

function put(note) {
  return utilService.put(NOTES_KEY, note)
}

function addNote(input, type) {
  const noteToAdd = {
    type: '',
    isPinned: false,    
    info: {
      txt: '',
      todos: [
      ],
    },
    img: '',
    url: '',
    style: {
      backgroundColor: 'gold'
    }
  }
  if (type === 'txt') {
    noteToAdd.type = "note-txt"
    noteToAdd.info.txt = input
    }
  
  else if (type === 'img') {
    noteToAdd.type = "note-img"
    noteToAdd.img = input
  }

  else if (type === 'video') {
    noteToAdd.type = "note-video"
    noteToAdd.url = input
  }

  else if (type === 'todo') {
    noteToAdd.type = "note-todos"
     input.map((todo)=>{     
      noteToAdd.info.todos.push({txt: todo, doneAt: Date.now()})  
    }
    )  
  }
  console.log(noteToAdd);
  return utilService.post(NOTES_KEY, noteToAdd)
}
