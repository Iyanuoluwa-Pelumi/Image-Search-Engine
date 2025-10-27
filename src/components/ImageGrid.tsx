import { Download } from 'lucide-react';
import Image from "next/image";

type ImageType = {
  id: number;
  src: { medium: string; original: string };
  photographer: string;
};

type Props = {items: ImageType[] };


// Function to download image
async function handleDownload(url: string, filename: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up the URL object
  } catch (error) {
    console.error("Download failed:", error);
  }
}


export default function ImageGrid({ items }: Props) {
  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((img) => (
        <div key={img.id} className="rounded overflow-hidden shadow">
          <Image
            src={img.src.medium}
            alt={img.photographer}
            width={300}
            height={200}
            className="w-full h-auto"
          />

          <div className="p-2 flex items-center justify-between">
            <p className="text-sm">{img.photographer}</p>

            {/* Download button */}

            <button onClick={() => handleDownload(img.src.original, `pexels-${img.id}.jpg`)}
              className="text-blue-500 text-sm underline flex items-center"
              >
              <Download className="inline-block cursor-pointer mr-1" size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
