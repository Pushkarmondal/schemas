import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    cratedby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', TodoSchema);
