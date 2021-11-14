import { utilService } from '../../services/util-service.js';

const MAIL_KEY = 'mails';
const SENT_KEY = 'sent-mails';
const DRAFT_KEY = 'draft-mails';
const TRASH_KEY = 'trash-mails';
const Starred_KEY = 'starred-mails';

_createMails()
_createSentMails()
_createDrafts()
_createTrash()
_createStarred()

export const mailService = {
  query,
  remove,
  getById,
  put,
  getNextMailId,
  makeId, //new
  setDateAndTime, //new
  lorem, //new
};

function lorem(){ //new
  return 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate excepturi ex deleniti ducimus! Magni quas commodi adipisci doloremque debitis nobis distinctio facere ipsa vel quod cum esse, velit aliquam.'
}

function setDateAndTime(){  //new
const d = new Date();
let time = d.toLocaleTimeString();
let date = d.toLocaleDateString();
return (date + ' ' + time)
}

function query(key) {
  return utilService.query(key);
}

function _createMails() { //new
  let mails = utilService.loadFromStorage(MAIL_KEY);
  if (!mails || !mails.length) {
    mails = [
      {
        "id": makeId(),
        "from": "Puki",
        "subject": "Hi",
        "txt": lorem(),
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": false,
        "isTrash": false,
      },
      {
        "id": makeId(),
        "from": "Muki",
        "subject": "Hi",
        "txt": lorem(),
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": false,
        "isTrash": false,
      },
      {
        "id": makeId(),
        "from": "Shuki",
        "subject": "Hi",
        "txt": lorem(),
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": false,
        "isTrash": false,
      },
    ]
    utilService.saveToStorage(MAIL_KEY, mails);
  }
}

function _createSentMails() { //new
  let mails = utilService.loadFromStorage(SENT_KEY);
  if (!mails || !mails.length) {
    mails = [
      {
        "id": makeId(),
        "to": "Puki",
        "subject": "Hi",
        "txt": lorem(),
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": false,
        "isTrash": false,
      }
    ]
    utilService.saveToStorage(SENT_KEY, mails);
  }
}

function _createDrafts() { //new
  let mails = utilService.loadFromStorage(DRAFT_KEY);
  if (!mails || !mails.length) {
    mails = [
      {
        "id": makeId(),
        "to": "Bobi",
        "subject": "Help",
        "txt": "Help!!!!!!",
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": false,
        "isTrash": false,
      }
    ]
    utilService.saveToStorage(DRAFT_KEY, mails);
  }
}

function _createTrash() { //new
  let mails = utilService.loadFromStorage(TRASH_KEY);
  if (!mails || !mails.length) {
    mails = [
      {
        "id": makeId(),
        "to": "Bobi",
        "subject": "Yes!!!",
        "txt": "NO!!!!!!",
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": false,
        "isTrash": true,
      }
    ]
    utilService.saveToStorage(TRASH_KEY, mails);
  }
}

function _createStarred() { //new
  let mails = utilService.loadFromStorage(Starred_KEY);
  if (!mails || !mails.length) {
    mails = [
      {
        "id": makeId(),
        "to": "Bobi",
        "subject": "Star",
        "txt": "Star!!!!!!",
        "date": setDateAndTime(),
        "isOpen": false,
        "isStarred": true,
        "isTrash": false,
      }
    ]
    utilService.saveToStorage(Starred_KEY, mails);
  }
}

function remove(KEY, mailId) { //new
  const idx = this.gMails.findIndex(mail => mail.id === mailId);
  this.gMails.splice(idx, 1);
  utilService.saveToStorage(KEY, this.gMails);
}


function getById(mailId) {
  return utilService.get(MAIL_KEY, mailId);
}

function put(KEY, mail){
  return utilService.put(KEY, mail)
}

function getNextMailId(mailId){
  return query()
  .then(mails => {
    const idx = mails.findIndex(mail => mail.id === mailId);
    return (idx === mails.length - 1)? mails[0].idx : mails[idx+1].id;
  })
}

function makeId(length = 5) { //new
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}