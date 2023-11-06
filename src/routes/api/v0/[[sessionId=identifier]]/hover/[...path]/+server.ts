export const GET = async ({params:{path, sessionId}}) => {
    console.log(sessionId, path)
    return new Response()
};