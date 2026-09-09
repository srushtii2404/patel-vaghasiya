import { getAuthorImageUrl, getAuthors } from "@/lib/sanity";
import AboutUsClient from "./AboutUsClient";

export const revalidate = 60;

const KALPESH_FALLBACK = "/assets/CA Kalpesh Patel photo.jpg";
const VISHAL_FALLBACK = "/assets/Vishal Vaghasiya_Photo.jpeg";

export default async function AboutUsPage() {
    const authors = await getAuthors();

    return (
        <AboutUsClient
            kalpeshImage={getAuthorImageUrl(authors, "kalpesh", KALPESH_FALLBACK)}
            vishalImage={getAuthorImageUrl(authors, "vishal", VISHAL_FALLBACK)}
        />
    );
}
