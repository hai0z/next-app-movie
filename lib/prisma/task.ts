"use server";
import prisma from ".";
import { revalidatePath } from "next/cache";

export const getAllTask = async () => {
    const task = await prisma.task.findMany({});
    return task;
};
// export const createTask = async (task: Task) => {
//     await prisma.task.create({
//         data: task,
//     });
// };
// export const deleteTask = async (id: string | undefined) => {
//     await prisma.task.delete({
//         where: {
//             id,
//         },
//     });
//     revalidatePath("/");
// };
