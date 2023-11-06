import {json} from "@sveltejs/kit";

export const GET = async ({params:{path, sessionId}}) => {
    return json([sessionId, path]);
};