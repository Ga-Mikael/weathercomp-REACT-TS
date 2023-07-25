export interface IWeather {
    city: string
    country: string
    iconId: string
    temperature: number
}

export type ApiError = string