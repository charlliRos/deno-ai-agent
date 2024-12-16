import Search from "../islands/Search.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ai agent for customer service</title>
        <meta name="description" content="Learn about Ai agent" />
      </Head>
      <main class="flex flex-col items-center justify-start my-10 w-full">
        <h1 class="md:(text-5xl) text-4xl font-bold text-center">
          Customer Service Ai Agent
        </h1>
        <p class="mt-1 text-lg text-center">
          Get started by asking questions in the chat box!
        </p>
        <img src="./walk.png" class="h-20" alt="walking dinos" />
        <Search />
        <a
          href="https://github.com/charlliRos/deno-ai-agent.git"
          target="_blank"
        >
          <img
            class="fixed z-10 md:(bottom-5 right-5) bottom-2 right-2 animate-bounce"
            width="45"
            height="45"
            src="/github.png"
            alt="Explore diKnow on GitHub"
          />
        </a>
      </main>
    </div>
  );
}
