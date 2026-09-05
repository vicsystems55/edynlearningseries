export type ApiSuccess<T> = {
  success: true
  message: string
  data: T
  meta?: Record<string, unknown>
}

export const success = <T>(data: T, message = 'Request completed successfully.'): ApiSuccess<T> => ({
  success: true,
  message,
  data,
})
