import { db, postSchema } from "./_helpers/db";

export async function get(req, res, next) {
  try {
    const { _id } = req.params;
    const finded = db.posts.findOne({ _id });
    res.json({ finded });
  } catch (error) {
    next(error);
  }
}

export async function put(req, res, next) {
  try {
    const { _id } = req.params;
    const post = req.body;
    const valid = await postSchema.validateAsync(post);

    await db.posts.update({ _id }, valid);
    res.json(valid);
  } catch (error) {
    next(error);
  }
}

export async function del(req, res, next) {
  try {
    const { _id } = req.params;
    const removed = await db.posts.remove({ _id });
    res.json({ removed });
  } catch (error) {
    next(error);
  }
}
