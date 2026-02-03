export type ProductResponse = {
    id : number ;
    title : string ;
    price : number ;
    description : string ;
    category : Category;
    slug : string ;
    images : [" "];

}

export type Category = {
    id :  number ;
    name : string ;
}

