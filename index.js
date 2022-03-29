class BuildTimer {
  apply(compiler) {
    let self = this
    compiler.hooks.environment.tap('start', (compilation) => {
      self.startTime = Date.now()
    })

    compiler.hooks.done.tap('end', compilation => {
      self.endTime = Date.now()
      console.log(`编译耗时：${self.endTime - self.startTime} ms`)
    })
  }
}
module.exports = BuildTimer 