import express from 'express';
import User from '../models/userModel';
import { getToken } from '../common/authToken';

const router = express.Router();

router.post("/signin", async (request, response) => {
    try {
        const signinUser = await User.findOne({
            email: request.body.email,
            password: request.body.password
        });
        if (signinUser) {
            response.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                token: getToken(signinUser)
            })

        }
        else {
            response.status(401).send({ msg: "Invalid Email or Password! Please Check" })
        }
    } catch (error) {
        response.send({ msg: error.message })
    }
});

router.post('/signup', async (request, response) => {
    const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });
    const newUser = await user.save();
    if (newUser) {
        response.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        response.status(401).send({ msg: 'Invalid User Data.' });
    }

})
router.get("/createadmin", async (request, response) => {
    console.log("request", request)
    try {
        const user = new User({
            name: "bhakti",
            email: "bhaktibj402@gmail.com",
            password: "bhakti@123",
            isAdmin: true
        });

        const newUser = await user.save();
        response.send(newUser);
    } catch (error) {
        response.send({ msg: error.message })
    }
})

export default router;