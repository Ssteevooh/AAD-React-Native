module.exports = {
    newNote: async (parent, args, { models }) => {
        return await models.Note.create({
        content: args.content,
        author: 'Steve Hommy',
        disabled: false
        });
    },
    deleteNote: async (parent, { id }, { models }) => {
        try {
            await models.Note.findOneAndRemove({ _id: id });
            return true;
        } catch (err) {
            return false;
        }
    },
    updateNote: async (parent, { content, id, disabled }, { models }) => {
        try {
          return await models.Note.findOneAndUpdate(
            {
              _id: id
            },
            {
              $set: {
                content,
                disabled
              }
            },
            {
              new: true
            }
          );
        } catch (err) {
          throw new Error('Error updating note');
        }
      }
}