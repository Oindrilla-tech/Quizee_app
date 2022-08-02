import axios from "axios"

const api=axios.create({
    baseURL:"https://opentdb.com/api.php"
})





export const getQuestions=async()=>{
    try{
        const res=await api.get(`?amount=${10}&type=${"multiple"}&category=${11}`)
        if(res.status==200){
            return res.data.results
        }else{
            return []
        }
    }
    catch(er){
        return []
    }
    
}