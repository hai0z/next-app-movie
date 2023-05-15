// import React from "react";
// import { createTask } from "@/lib/prisma/task";
// import { revalidatePath } from "next/cache";

// function AddTask() {
//     const addTask = async (data: FormData) => {
//         "use server";
//         const taskName = data.get("taskname");
//         await createTask({
//             title: taskName as string,
//             isCompleted: false,
//             createdAt: new Date(),
//         });
//         revalidatePath("/");
//     };
//     return (
//         <form action={addTask} className="flex flex-row p-4 " id="form">
//             <input
//                 type="text"
//                 className="text-black input input-primary"
//                 name="taskname"
//             />
//             <button
//                 className="btn btn-secondary ml-2 text-black placeholder-black"
//                 placeholder="enter task name"
//             >
//                 add
//             </button>
//         </form>
//     );
// }

// export default AddTask;
