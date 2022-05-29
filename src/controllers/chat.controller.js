import mongoose from 'mongoose'
import channalModel from '../models/channal.model.js'
import messageModel from '../models/message.model.js'

export const getChannals = async (userid) => {
  let from = mongoose.Types.ObjectId(userid)

  // return []
  let userConvos = await channalModel.aggregate([
    {
      $match: {
        users: { $all: [{ $elemMatch: { $eq: from } }] },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'users',
        foreignField: '_id',
        as: 'usersObj',
      },
    },
    {
      $sort: {
        updatedAt: -1,
      },
    },
  ])

  return userConvos
  // console.log(userConvos)
  // let userConvos = []
  // conversations.forEach((convo) => {
  //   if (checkUserInConvo(convo.users, [userid])) {
  //     userConvos = [...userConvos, convo]
  //   }
  // })
  // return userConvos
}

export const getMessages = async (user, authUser) => {
  let user1 = mongoose.Types.ObjectId(user)
  let user2 = mongoose.Types.ObjectId(authUser)
  let messages = await messageModel.aggregate([
    {
      $match: {
        $or: [
          { $and: [{ senderId: user1 }, { receiverId: user2 }] },
          { $and: [{ senderId: user2 }, { receiverId: user1 }] },
        ],
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'receiverId',
        foreignField: '_id',
        as: 'receiver',
      },
      $lookup: {
        from: 'users',
        localField: 'senderId',
        foreignField: '_id',
        as: 'sender',
      },
    },
  ])
  // .match({
  //   $or: [
  //     { $and: [{ senderId: user1 }, { receiverId: user2 }] },
  //     { $and: [{ senderId: user2 }, { receiverId: user1 }] },
  //   ],
  // })
  // .exec((err, messages) => {
  //   if (err) {
  //     console.log(err)
  //     // res.setHeader('Content-Type', 'application/json');
  //     // res.end(JSON.stringify({ message: 'Failure' }));
  //     // res.sendStatus(500);
  //   } else {
  //     return messages
  //   }
  // })
  if (messages) return messages
}

export const sendMessage = async (payload) => {
  let senderId = mongoose.Types.ObjectId(payload.senderId)
  let receiverId = mongoose.Types.ObjectId(payload.receiverId)
  let count = `unreadCount.${receiverId}`
  let updatedConvo = await channalModel.findOneAndUpdate(
    {
      users: {
        $all: [
          { $elemMatch: { $eq: senderId } },
          { $elemMatch: { $eq: receiverId } },
        ],
      },
    },
    {
      users: [senderId, receiverId],
      lastMessage: payload.body,
      $inc: {
        [count]: 1,
      },
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  )
  if (updatedConvo) {
    let message = await messageModel.create({
      ...payload,
      channalId: updatedConvo._id,
    })
    let prettyMessage = await messageModel.aggregate([
      {
        $match: {
          _id: message._id,
        },
      },
      {
        $lookup: {
          localField: 'senderId',
          foreignField: '_id',
          from: 'users',
          as: 'senderObj',
        },
      },
    ])
    // console.log(JSON.stringify(prettyMessage))
    return prettyMessage[0]
  }
}
export const deleteChannal = async (id) => {
  let channalResponse = await channalModel.deleteOne({
    _id: id,
  })
  let messageResponse = await messageModel.deleteMany({ channalId: id })
  return {
    channals: channalResponse,
    messages: messageResponse,
  }
}
export const seenMessages = async ({ channalId, authUser }) => {
  let count = `unreadCount.${authUser}`
  console.log(count, channalId)
  let channalResponse = await channalModel.updateOne(
    { _id: channalId },
    {
      [count]: 0,
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  )
  console.log(channalResponse)
  return channalResponse
}
export const getAllUnreadCount = async (userId) => {
  let from = mongoose.Types.ObjectId(userId)
  let count = `$unreadCount.${userId}`
  let channalResponse = await channalModel.aggregate([
    {
      $match: {
        users: { $all: [{ $elemMatch: { $eq: from } }] },
      },
    },
    {
      $project: {
        total: {
          $sum: count,
        },
      },
    },
  ])

  return channalResponse.reduce(
    (total, val) => Number(total) + Number(val.total),
    0
  )
}
