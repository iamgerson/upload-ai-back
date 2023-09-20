import 'dotenv/config'
import { OpenAI } from 'openai';

export const openai = new OpenAI({
  organization: "org-Z4W84h8iTIJfdtsQOG2n7l7U",
  apiKey: process.env.OPENAI_KEY,
})