const preloadedImages = new Set<string>()

export function preloadImages(imageUrls: string[]) {
  imageUrls.forEach((imageUrl) => {
    if (preloadedImages.has(imageUrl)) {
      return
    }

    preloadedImages.add(imageUrl)
    const image = new Image()
    image.decoding = 'async'
    image.src = imageUrl
  })
}
