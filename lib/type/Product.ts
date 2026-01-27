export type ProductResponse = {
    id : number ;
    title : string ;
    price : number ;
    description : string ;
    slug : string ;
    category : Category;
    images : [""];

}

export type Category = {
    id :  number ;
    name : string ;
}

