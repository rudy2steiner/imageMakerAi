import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import to from "await-to-js";
import { Client } from "@gradio/client";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    console.log('handle image file:'+files.length);
    const client = await Client.connect("chatbase/PhotoMaker-V2");
    // await client.status(); // Check space status


    console.log('Connected to PhotoMakerV2:');
    result = await client.predict("/generate_image", {
    		upload_images: [handle_file(files)],
    		prompt: "Hello!!",
    		negative_prompt: "Hello!!",
    		aspect_ratio_name: "Instagram (1:1)",
    		style_name: "(No style)",
    		num_steps: 20,
    		style_strength_ratio: 15,
    		num_outputs: 1,
    		guidance_scale: 0.1,
    		seed: 0,
    		use_doodle: true,
    		sketch_image: {"background":handle_file('https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png'),"layers":[],"composite":None},
    		adapter_conditioning_scale: 0.5,
    		adapter_conditioning_factor: 0.5,
    });
    console.log(`hugging result:${result.data}`);
    const uploadedFiles = await Promise.all(
    files.map(async (file) => {
        console.log('handle file name:'+ file.name);
        const bytes = await file.arrayBuffer();
        const blob = new Blob([bytes], { type: file.type });
        console.log('handle file blob');
        //const bytes = await file.arrayBuffer();
        // const buffer = Buffer.from(bytes);
         console.log('handle file:');
        // Create unique filename
        const uniqueName = `${Date.now()}-${file.name}`;
        // const path = join(process.cwd(), 'public', 'uploads', uniqueName);

        // Save file
        // await writeFile(path, buffer);

        return {
          id: Math.random().toString(36).substring(7),
          url: `/uploads/${uniqueName}`,
          name: file.name
        };
      })
    );
    console.log('uploaded files:'+uploadedFiles);
    return NextResponse.json({
      success: true,
      files: uploadedFiles
    });
  } catch (error) {
    console.log('error:'+error.message);
    return NextResponse.json(
      { success: false, error: 'Failed to upload files' },
      { status: 500 }
    );
  }
}