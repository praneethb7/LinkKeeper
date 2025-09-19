import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import type { Link } from "@/types";

import { GlowingEffect } from "./ui/glowing-effect";

interface Props {
  link: Link;
  onDelete: (id: string) => void;
}

function LinkCard({ link, onDelete }: Props) {
  return (
    <Card className="w-full mt-[50px] mb-[-40px] max-w-md bg-zinc-900 text-white border border-zinc-700">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
      <CardHeader>
        <CardTitle>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            {link.title}
          </a>
        </CardTitle>
        {link.description && (
          <CardDescription className="text-gray-400">
            {link.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          {link.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-zinc-800 rounded-md text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          onClick={() => onDelete(link._id)}
        >
          Delete
        </button>
      </CardFooter>
    </Card>
  );
}

export default LinkCard;
