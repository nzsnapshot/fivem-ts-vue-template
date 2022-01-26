/* eslint-disable no-console */
import { store } from './store/index'
const BASE_URL = 'https://lc-ui2/'
import Nui from './utils/Nui'

/* eslint-disable camelcase */
class api {
  constructor() {
    window.addEventListener('message', (event) => {
      const eventType = event.data.event
      if (eventType !== undefined && typeof this['on' + eventType] === 'function') {
        this['on' + eventType](event.data)
      }
    })
  }

  async post(method, data) {
    const ndata = data === undefined ? '{}' : JSON.stringify(data)
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(BASE_URL + method, options)
    return response.json()
  }

  async log(...data) {
    if (process.env.NODE_ENV === 'production') {
      return this.post('log', data)
    } else {
      return console.log(...data)
    }
  }

  async CloseEverything() {
    store.commit('SET_OPEN_MENU', false)
    Nui.send('lcore-ui:closeApp', {})
  }

  // All UI events coming in must start with 'on' then event name
  // Example
  // SendNUIMessage({
  //     event: 'NewEvent',
  //     payload: 'yes'
  //  })
  onNewEvent(data) {
    store.commit("module/SET_POG", data.payload)
  }
}

// eslint-disable-next-line new-cap
const instance = new api()

export default instance

