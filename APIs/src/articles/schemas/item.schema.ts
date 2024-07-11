import { Schema } from 'mongoose';

export default new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      require: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    author: {
      _id: {
        type: String,
        default: new Date().getTime(),
      },
      name: {
        type: String,
        default: 'Jenn',
      },
      bio: {
        type: String,
        default: 'Ph.D in Computer Science, Master in distributed systems',
      },
      avatar: {
        type: String,
        default: '',
      },
    },
  },
  {
    timestamps: true,
  },
);
