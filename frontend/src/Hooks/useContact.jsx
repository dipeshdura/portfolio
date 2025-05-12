
const useContact =()=>{
    const sendContact =async({name,email,subject,message})=>{

        const response =await fetch("https://portfolio-scx5.onrender.com/api/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                subject,
                message:message.replace(/\.$/,"") + " "+"🤝"
            })
        });
        if(!response.ok){
            throw new Error("Failed to send message");
        } 
        const data = await response.json();
        return data;
    };
    return {sendContact};
};

export default useContact;