const monthNames:String[]= ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const dateYear = new Date().getFullYear();
const dateMonth = new Date().getMonth();
const dateDay = new Date().getDate();

    //ПОЛУЧЕНИЕ ТАТЛОВ КАЛЕНДАРЯ
    const getCurrentMonthTitle = (bias:number = 0)=>{
        const date = new Date(dateYear,dateMonth+bias);
        return `${monthNames[date.getMonth()]}, ${date.getFullYear()}`
    }
    const getNextMonthTitle = (bias:number = 0)=>{
        const date = new Date(dateYear,dateMonth+1+bias);
        return `${monthNames[date.getMonth()]}, ${date.getFullYear()}`
    }
    //ПОЛУЧЕНИЕ МАССИВА ДНЕЙ В МЕСЯЦЕ
    const getCurrentMonthDays = (bias:number = 0)=>{
        const dayArray:number[]= [];
        const endOfCurrentMonth = (new Date(dateYear,dateMonth+bias+1,0).getDate());
        for (let i = 1; i<=endOfCurrentMonth; i++){
            dayArray.push(i);
        }
        return dayArray
    }
    const getNextMonthDays = (bias:number = 0)=>{
        const dayArray:number[] = [];
        const endOfCurrentMonth = (new Date(dateYear,dateMonth+bias+2,0).getDate())
        for (let i = 1; i<=endOfCurrentMonth; i++){
            dayArray.push(i);
        }
        return dayArray
    }
    //ПОЛУЧЕНИЕ НОМЕРА ПЕРВОГО ДНЯ МЕСЯЦА
    const getCurrentMonthStartDay = (bias:number = 0)=>{
        return new Date(dateYear,dateMonth+bias).getDay()
    }
    const getNextMonthStartDay = (bias:number = 0)=>{
        return new Date(dateYear,dateMonth+bias+1).getDay()
    }
    //ПОЛУЧЕНИЕ ДАТ ПРЕДЫДУЩЕГО МЕСЯЦА
    const getCurrentMonthPastMonthEndDays = (bias:number = 0)=>{
        const pastMonthEndDays:number[] = [];
        for (let i = 0; i< getCurrentMonthStartDay(bias)-1; i++){
            pastMonthEndDays.unshift(new Date(dateYear,dateMonth,0).getDate()-i);
        }
        return pastMonthEndDays
    }
    const getNextMonthPastMonthEndDays = (bias:number = 0)=>{
        const pastMonthEndDays:number[] = [];
        for (let i = 0; i< getNextMonthStartDay(bias)-1; i++){
            pastMonthEndDays.unshift(new Date(dateYear,dateMonth+1,0).getDate()-i);
        }
        return pastMonthEndDays
    }
    //ПОЛУЧЕНИЕ ФИЛЛЕРОВ
    const getCurrentMonthFillers = (bias:number = 0)=>{
        const fillersArray:string[] = [];
        for (let i = 0;i< getCurrentMonthStartDay(bias)-1;i++){
            fillersArray.push('');
        }
        return fillersArray
    }
    const getNextMonthFillers = (bias:number = 0)=>{
        const fillersArray:string[] = [];
        for (let i = 0;i< getNextMonthStartDay(bias)-1;i++){
            fillersArray.push('');
        }
        return fillersArray
    }
    //ОБЪЕДИНЕНИЕ МАССИВОВ С ДАТАМИ И ФИЛЛЕРА В ОДИН, ЧТО-БЫ ПЕРЕДАТЬ ЕГО В ARRAY.PROTOTYPE.MAP
    const getCurrentMonthDaysArrayWithFillers = (bias:number = 0)=>{
        const fillersArray = getCurrentMonthFillers(bias);
        const dayArray = getCurrentMonthDays(bias);
        const currentMonthDaysWithFillers:(string|number)[] = [];
        for (let i = 0; i<fillersArray.length;i ++){
            currentMonthDaysWithFillers.push(fillersArray[i]);
        }
        for (let i = 0; i<dayArray.length;i ++){
            currentMonthDaysWithFillers.push(dayArray[i]);
        }
        return currentMonthDaysWithFillers
    }
    const getNextMonthDaysArrayWithFillers = (bias:number = 0)=>{
        const fillersArray = getNextMonthFillers(bias);
        const dayArray = getNextMonthDays(bias);
        const nextMonthDaysWithFillers:(string|number)[] = [];
        for (let i = 0; i<fillersArray.length;i ++){
            nextMonthDaysWithFillers.push(fillersArray[i]);
        }
        for (let i = 0; i<dayArray.length;i ++){
            nextMonthDaysWithFillers.push(dayArray[i]);
        }
        return nextMonthDaysWithFillers
    }
    const getCurrentMonthDaysState = (bias:number = 0)=>{
        const dateState:{[k:string]:string} = {}
        const endOfCurrentMonth = new Date(dateYear,dateMonth+bias+1,0).getDate()
        for (let i = 1; i<= endOfCurrentMonth; i++){
            if(new Date(dateYear,dateMonth,i)< new Date()){
                dateState[i]= 'disabled'
            }
            else{
                dateState[i] = 'active'
            }
        }
        return dateState
    }
    const getNextMonthDaysState = (bias:number = 0)=>{
        const dateState:{[k:string]:string} = {}
        const endOfCurrentMonth = new Date(dateYear,dateMonth+bias+1,0).getDate()
        for (let i = 1; i<= endOfCurrentMonth; i++){
            if(new Date(dateYear,dateMonth,i)< new Date()){
                dateState[i]= 'disabled'
            }
            else{
                dateState[i] = 'active'
            }
        }
        return dateState
    }
    const getCurrentMonthToCompaireDate = (bias:number = 0)=>{
        return new Date(dateYear,dateMonth+bias,dateDay)
    }
    const getNextMonthToCompaireDate = (bias:number = 0)=>{
        console.log(new Date(dateYear,dateMonth+bias+1,1))
        return new Date(dateYear,dateMonth+bias+1,1);
    }
    const testDate = (bias:number = 0) =>{
    }
export {
    getCurrentMonthTitle,getNextMonthTitle,
    getCurrentMonthDays,getNextMonthDays,
    getCurrentMonthDaysArrayWithFillers,getNextMonthDaysArrayWithFillers,
    getNextMonthDaysState,getCurrentMonthDaysState,
    getCurrentMonthToCompaireDate,getNextMonthToCompaireDate,
    testDate,
}