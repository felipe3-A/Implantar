import  Express from "express";
import logindex from "./router.js"
import cors from "cors"





const app = Express()
app.use(Express.json())
app.use(logindex)
app.use(cors())
export default app