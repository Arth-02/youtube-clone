import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(){
    const videos = await prisma.video.findMany({
        where: {
            published: true
        },
        orderBy: {
            createdAt: "desc"
        },
    });

    return NextResponse.json(videos);
}

// export async function GET(request){
//     const { id } = request.params;

//     const video = await prisma.video.findUnique({
//         where: {
//             id: Number(id),
//         },
//     });

//     if(!video){
//         return NextResponse.redirect("/404");
//     }

//     return NextResponse.json(video);
// }

export async function POST(request){
    const { title, description, url } = await request.body.json();

    const video = await prisma.video.create({
        data: {
            title,
            description,
            url,
        },
    });

    return NextResponse.json({success: true, video });
}