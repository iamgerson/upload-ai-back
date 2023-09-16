import { fastify } from "fastify";
import { getAllPromptsRoute } from "./Routes/get-all-prompts";
import { uploadVideoRoute } from "./Routes/upload-video";
import { createTranscriptionRoute } from "./Routes/create-transcription";
import { generateAICompletionRoute } from "./Routes/generate-ai-completion";

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)


app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!!')
})