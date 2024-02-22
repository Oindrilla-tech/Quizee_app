import axios from "axios"

const api=axios.create({
    baseURL:"https://opentdb.com/api.php"
})





export const getQuestions=async(quiz,level,category)=>{
    try{
        const res=await api.get(`?amount=${quiz}&difficulty=${level}&category=${category}&type=multiple`)
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