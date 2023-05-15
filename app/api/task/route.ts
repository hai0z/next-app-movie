import { getAllTask, createTask } from "@/lib/prisma/task";
import { NextResponse, NextRequest } from "next/server";

async function GET() {
    const task = await getAllTask();
    return NextResponse.json(task);
}
async function POST(req: NextRequest) {
    const body = await req.json();
    await createTask(body);
    return new Response("ok");
}
export { GET, POST };
