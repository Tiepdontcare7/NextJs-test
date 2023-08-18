'use client'
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
    }
    return (
        <>
            <div>About Page</div>
            
            <button onClick={handleBtn} className="inline-flex items-center justify-center px-5 py-3 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg">
                Back to home
            </button>
        </>
    );
}

export default About;