import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await replicate.run(
      "replicate/llama70b-v2-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
      {
        input: {
          prompt: prompt,
          temperature: 0.75,
          system_prompt:
            "You are a helpful, respectful and honest code generator. You must answer only in markdown code snippets. Use code comments for explanations.. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. If a code does not make any sense, or is not factually coherent, explain why instead of generating something not correct. If you don't how to generate a code snippet, please don't share false or incorrect code.",
        },
      }
    );
    console.log("[CODEGEN_RESPONSE]", response);

    return NextResponse.json(response);
  } catch (error) {
    console.log("[CODEGEN_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
