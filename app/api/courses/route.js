import { NextResponse } from "next/server";
import courses from "./data.json";
import { v4 as uuidv4 } from "uuid";

export async function GET(request) {
  return NextResponse.json(courses);
}
export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };
  courses.push(newCourse);

  console.log(title, description, level, link);
  //   courses.push(course);
  return NextResponse.json(courses);
  // return NextResponse.json({ message: " Course created " });
}