export const SET_PREF = 'SET_PREF'

export function savePref(payload) {
  return {
    type: SET_PREF,
    payload,
  }
}
