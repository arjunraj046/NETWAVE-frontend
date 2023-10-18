export interface IuserSignupResponse {
    status: string,
    message: string,
}

export interface IuserLoginResponse {
    status: string,
    message: string,
    token: string,
}
export interface IfriendSuggestionResponse {
    status: string,
    suggestionList : Array<object>
}
