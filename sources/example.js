import AbstractSource from './abstract.js'

export default new class SeaDex extends AbstractSource {
  name = 'Example extension'
  description = 'Example extension containing free, public domain torrents.'
  /** @type {import('./types.js').Accuracy} */
  accuracy = 'Low'

  /** @type {import('./types.js').SearchFunction} */
  async single () {
    return [
      {
        hash: 'dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c',
        link: 'dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c',
        title: 'Big Buck Bunny',
        size: 276000000,
        date: new Date('2017-03-30T23:30:01'),
        seeders: 1401,
        leechers: 12,
        downloads: 102203,
        verified: false
      },
      {
        hash: 'c9e15763f722f23e98a29decdfae341b98d53056',
        link: 'c9e15763f722f23e98a29decdfae341b98d53056',
        title: 'Cosmos Laundromat',
        size: 276000000,
        date: new Date('2017-03-30T23:30:17'),
        seeders: 1401,
        leechers: 12,
        downloads: 102203,
        verified: false
      },
      {
        hash: '08ada5a7a6183aae1e09d831df6748d566095a10',
        link: '08ada5a7a6183aae1e09d831df6748d566095a10',
        title: 'Sintel',
        size: 276000000,
        date: new Date('2017-03-30T23:30:17'),
        seeders: 1401,
        leechers: 12,
        downloads: 102203,
        verified: false
      }
    ]
  }

  batch = this.single
  movie = this.single
}()
