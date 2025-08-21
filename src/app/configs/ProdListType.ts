export interface ImageObj {
    url: string
}

export interface sizeArray {
    size: string,
    enabled: boolean
}

export interface ProdList {
    Name: string,
    Price: number,
    Category: string,
    sizeArray: sizeArray[]
    Image: ImageObj[],
    id: number
}

export interface ProdListArray {
    ProdList: ProdList[]
}