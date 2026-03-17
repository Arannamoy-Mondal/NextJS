
const page = async({params,}:{params:Promise<{blogId:string}>;}) => {
    const {blogId}=await params;
    console.log(blogId);
    return (
        <div>
         <h1> Dynamic blogpage:{blogId}</h1>
        </div>
    );
};

export default page;