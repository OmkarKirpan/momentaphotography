import Image from 'next/image'

const categories = [
  { name: 'Ceremony', images: [1, 2, 3, 4] },
  { name: 'Reception', images: [5, 6, 7, 8] },
  { name: 'Engagement', images: [9, 10, 11, 12] },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
      {categories.map((category) => (
        <div key={category.name} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.images.map((imageId) => (
              <div key={imageId} className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${category.name}+${imageId}`}
                  alt={`${category.name} ${imageId}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

