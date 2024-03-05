export const GET = (request, { params, }) => {

    const searchParams = new URLSearchParams(new URL(request.url).search)
    const skip = searchParams.get("ok")
    const limit = searchParams.get("limit")

    console.log(skip)
    console.log(limit)
    console.log(params)
    return new Response(params.id * 12)

}