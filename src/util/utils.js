export default  
{
    formatDate(time){
        function judge(el){
           return el < 10 ? ("0" + el) : el 
        }
        if(!time){return ""}
        let date = new Date(time);
        return date.getFullYear() + "-" + 
               judge(date.getMonth() + 1) + "-" + 
               judge(date.getDate()) + " " + 
               judge(date.getHours())  + ":" + judge(date.getMinutes()) + ":" + judge(date.getSeconds());
    }
}