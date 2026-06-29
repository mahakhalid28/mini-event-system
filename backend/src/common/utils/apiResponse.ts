

export const apiResponse = (
  success: boolean,
  message: string,
  data: unknown = null
) => ({
  success,
  message,
  data,
});