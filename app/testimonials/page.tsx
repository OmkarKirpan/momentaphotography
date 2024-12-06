import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah & John',
    image: '/placeholder.svg?height=100&width=100&text=S&J',
    quote: 'Jane captured our wedding day perfectly. The photos are absolutely stunning and bring back all the emotions of that special day.',
    rating: 5,
  },
  {
    name: 'Emily & Michael',
    image: '/placeholder.svg?height=100&width=100&text=E&M',
    quote: "We couldn't be happier with our wedding photos. Jane has an incredible eye for detail and made us feel so comfortable throughout the day.",
    rating: 5,
  },
  {
    name: 'Jessica & David',
    image: '/placeholder.svg?height=100&width=100&text=J&D',
    quote: "Jane's professionalism and creativity shone through in every shot. She captured moments we didn't even know happened!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Client Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="border rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  )
}

