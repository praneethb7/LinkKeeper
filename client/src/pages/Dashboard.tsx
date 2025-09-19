import { useEffect, useState } from "react";
import { fetchLinks, deleteLink } from "@/api";
import type { Link } from "@/types";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import LinkCard from "@/components/LinkCard";

function Dashboard() {
    const [links, setLinks] = useState<Link[]>();
    const [search, setSearch] = useState<string>();
    const [tag, setTag] = useState<string>();

    const loadLinks = async () => {
        const { data } = await fetchLinks({ search, tag });
        setLinks(data);
    }

    useEffect(() => {
        loadLinks();
    }, [search, tag])

    const handleDelete = async (id: string) => {
        await deleteLink(id);
        loadLinks();
    }


    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-white mt-[40px] ml-[80px]">📋 My Bookmarks</h1>
            <PlaceholdersAndVanishInput
                placeholders={["Search..."]}
                onChange={(e) => setSearch(e.target.value)}
            />
            <PlaceholdersAndVanishInput
                placeholders={["Tag..."]}
                onChange={(e) => setTag(e.target.value)}
            />

            <div className="flex flex-wrap gap-5 mt-4">
                {links?.map((link) => (
                    <LinkCard key={link._id} link={link} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard;