export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'

export function displayNotification(payload) {
  return {
    type: SHOW_NOTIFICATION,
    payload,
  }
}
