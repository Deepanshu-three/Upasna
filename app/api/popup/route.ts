import db from "@/lib/db/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
    const {name, city, phone} = await req.json();

    if(!name){
        return new Response(JSON.stringify({message: "Name is required"}), {status: 400});
    }
    if(!city){
        return new Response(JSON.stringify({message: "City is required"}), {status: 400});
    }
    if(!phone){
        return new Response(JSON.stringify({message: "Phone is required"}), {status: 400});
    }

    await db.contactInfo.create({
        data: {
            name,
            city,   
            contactNumber: phone
        }
    });
    
    return new Response(JSON.stringify({message: "Contact info saved successfully"}), {status: 200});
}

export async function GET(req: NextRequest){
    const contacts = await db.contactInfo.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    return new Response(JSON.stringify(contacts), {status: 200});
}

export async function DELETE(req: NextRequest){
    const { id } = await req.json();

    if(!id){
        return new Response(JSON.stringify({message: "ID is required"}), {status: 400});
    }

    await db.contactInfo.delete({
        where: {
            id
        }
    });

    return new Response(JSON.stringify({message: "Contact info deleted successfully"}), {status: 200});
}