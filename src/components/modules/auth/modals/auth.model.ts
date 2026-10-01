// auth.model.ts — TypeScript interfaces/types for auth domain
export interface AuthTokens {
    accessToken: string
    refreshToken: string
    expiresAt: number
}

export interface AuthCredentials {
    email: string
    password: string
}
