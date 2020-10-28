
export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id === Number(folderId))

export const findNote = (notes, noteId) =>
  notes.find(note => note.id === Number(noteId))
  

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folder === Number(folderId))
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folder === Number(folderId)).length
