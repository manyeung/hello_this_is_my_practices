// Why the `load` method run frequently even if 10s timeout is set?
// How to fix it?

class Foo {
  id = null
  loading = false

  log(...args) {
    console.log(this.id, new Date(), ...args)
  }

  load(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.id = id
        this.log('load')
        result += 1;
        resolve();
      }, 10000)
    })
  }

  async run() {
    this.id = Math.random()
    try {
      this.log('run', this.loading)
      if (this.loading) {
        return
      }
      this.loading = true
      await this.load(this.id)
      this.log('loaded', result)
    } catch (error) {
      this.log('error', error)
    } finally {
      this.loading = false
      this.log('finally')
    }
  }
}

let i = 10;
let result = 0
const foo = new Foo()
while (i--) {
  foo.run()
}
