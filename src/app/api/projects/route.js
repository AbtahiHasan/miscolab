import { NextResponse } from "next/server"

import db from "@/data/projects.json"

export const GET = (req) => {
    let projects;
    const {searchParams} = new URL(req.url)
    const id = searchParams.get("id")
    if (id) {
        projects = db.find(project => project._id === id)
    }  
    else {
        projects = db
    }
    return NextResponse.json(projects)
}