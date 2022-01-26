export default {
  async send(event, data = {}) {
    // return await new Promise(resolve => setTimeout(resolve, 100));
    /* eslint-disable no-unreachable */
    const res = await fetch(`http://lc-ui/${event}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
    const yeet = res.json()
    return yeet
    /* eslint-enable no-unreachable  */
  }

}