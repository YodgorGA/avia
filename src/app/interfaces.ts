export interface IObj{
    [key:string]:any
}

export interface IArrObj{
    [key:number]:{
        [key:string]:any
    }
}

export interface ICity extends Object{
    name?:string
    city?:string
    city_name?:string
    type?:string
}
export {

}