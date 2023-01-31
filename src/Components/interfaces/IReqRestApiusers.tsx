
export interface IReqRestApi {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        ID[];
    support:     ISupport;
}



export interface ID {
    id:            number;
    Nombre:          string;
    Año:          number;
    Color:         string;
    Img:        string;
}



export interface ISupport {
    url:  string;
    text: string;
}