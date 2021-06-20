import cookieparser from 'cookieparser'

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {

    if (!req.headers.cookie) { return }

    const parse = cookieparser.parse(req.headers.cookie)
    const accessToken = parse.accessToken

    if (!accessToken) { return }

    const data = { accessToken: accessToken }

    commit('login/setUserData', data)

    await dispatch('login/authUser')
  }
}