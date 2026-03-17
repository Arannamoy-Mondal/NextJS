

const pase =async () => {
    const res=await fetch("http://127.0.0.1:8080/user/ns")
    const users=await res.json()
    console.log(users);
    return (
        <div>
            hello
        </div>
    );
};

export default pase;