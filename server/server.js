import  express  from "express";
import cors from "cors";
import 'dotenv/config'
import Stripe from "stripe";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome")
});

app.post('/pay', async (req, res)=>{
    console.log(req.body.token)
 await stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
 });
});

 app.listen(port, () => {
    console.log("listening on port" + port)
 });