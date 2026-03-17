import Image from "next/image";


const page = () => {
    return (
        <div>
            <Image src="vercel.svg" alt="next.js icon" width={100} 
                height={100}/>
            <h1>Next.js image component</h1>
        </div>
    );
};

export default page;