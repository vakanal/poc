import * as admin from "firebase-admin";
import * as express from "express";

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();
const auth = admin.auth();

export default () => {
  const app = express();

  // ! Middleware de autentificación - Start:
  app.use(async (req, res, next) => {
    const token: any = req.headers.authorization;
    try {
      const { uid, email } = await auth.verifyIdToken(token);
      const snap = await db
        .collection("users")
        .doc(uid)
        .get();

      const user = snap.data();
      Object.assign(req, {
        user: {
          ...user,
          uid,
          email
        }
      });

      next();
    } catch (error) {
      res.status(403).send("Error al autorizar");
    }
  });
  // ! Middleware de autentificación - End:

  app.get("/posts", (req, res) => {
    res.send("Hola mundo!!!");
  });

  return app;
};
