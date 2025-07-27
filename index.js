import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatPromptTemplate } from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";
import { HumanMessage } from "langchain/schema";

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant that answers questions about LangGraph."],
  ["human", "{input}"]
]);

const model = new ChatOpenAI({ temperature: 0 });

const chain = RunnableSequence.from([prompt, model]);

const runChat = async (message) => {
  const response = await chain.invoke({ input: message });
  console.log("Bot:", response.content);
};

const userMessage = process.argv[2] || "What is LangGraph?";
runChat(userMessage);
