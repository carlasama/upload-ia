import { fastify } from "fastify";
import fastifyCors from 'fastify-cors';
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionUpload } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
})
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionUpload);
app.register(generateAICompletionRoute);

app.get('/ping', async (request, reply) => {
  return 'pong\n'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running!");
  });
