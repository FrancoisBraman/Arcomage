export interface CardInterface {
    id: number;
    name: string;
    desc: string;
    type: string;
    cost: number;
    image: string;
    special: { [key: string]: any }; //! Update this one if we use number value
}

export interface ResourceInterface {
    [key:string]: {
        stock: number;
        generator: number;
    };
}