import { connectDB } from "../../util/database";

export default async function Home() {
    const db = (await connectDB)("forum");
    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <div>
            <div></div>
        </div>
    );
}
