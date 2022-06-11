const notFound = (req, res) => {
  res.status(404).send('Rote does not exist')
}

module.exports = notFound
