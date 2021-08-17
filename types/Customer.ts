// Definimos nuevos tipos (interfaces) de TS llamados Customer

export interface BasicCustomer {
    id: number,
}

export interface Customer extends BasicCustomer{
    name: string,
    email?: string,
    password?: string
}