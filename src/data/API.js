class API {
  async getDevelopers() {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/taller/developers/'
    )
    return res.json()
  }

  async postDeveloper(id, data) {
    const res = await fetch(
      `https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/taller/developer/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    return res.json()
  }
}

export default new API()
