import expressAsyncHandler from 'express-async-handler'

export const uploadImages = expressAsyncHandler((req, res) => {
  if (req.files && req.files.length > 0) {
    res.json(
      req.files[0].destination.split('public/images/').slice(1) +
        req.files[0].filename
    )
  } else {
    throw new Error('Image Uploading Failed')
  }
})
