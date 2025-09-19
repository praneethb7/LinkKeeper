"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { addLink } from "@/api";


const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

function AddLink() {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addLink({
            url,
            title,
            description: desc,
            tags: tags.split(",").map((t) => t.trim()),
        });
        setUrl("");
        setTitle("");
        setDesc("");
        setTags("");
        alert("Link added!");
    };

    return (
        <div className="relative top-[200px] shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="url">URL</Label>
                        <Input id="url" placeholder="https://www.example.com" type="text" onChange={(e)=>setUrl(e.target.value)}/>
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Title" type="text" onChange={(e)=>setTitle(e.target.value)} />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Write a short description" type="text" onChange={(e)=>setDesc(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="tags">Write Comma-Separated tags</Label>
                    <Input id="tags" placeholder="react,vite,setup" type="text" onChange={(e)=>setTags(e.target.value)}/>
                </LabelInputContainer>
                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Add New Link &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    )
}
export default AddLink;