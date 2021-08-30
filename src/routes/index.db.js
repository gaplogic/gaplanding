import { db, postSchema } from "./_helpers/db";

export async function get(req, res, next) {
  try {
    const posts = db.posts.find();
    res.json({ posts });
  } catch (error) {
    next(error);
  }
}

export async function post(req, res, next) {
  try {
    const post = req.body;
    const valid = await postSchema.validateAsync(post);

    db.posts.save(valid);
    res.json(valid);
  } catch (error) {
    next(error);
  }
}
