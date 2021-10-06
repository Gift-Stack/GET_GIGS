export type Error = {
  message: string
}
export interface Action {
  type: string
  payload?: any
}
export interface GigsState<Error> {
  gigs: null | object[]
  loading: boolean
  error: null | Error
}
