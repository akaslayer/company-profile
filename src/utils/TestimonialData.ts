interface Testimonial {
  id: number
  rating: number
  content: string
  author: {
    name: string
    role: string
    imageUrl: string
  }
}

export const TestimonialData: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    content:
      'This place gives me the best services that were not given by another company. I love this company so much, and I will do an RO for this company.',
    author: {
      name: 'Sachin Diwar',
      role: 'Graphic Designer',
      imageUrl: '/pic3.png',
    },
  },
  {
    id: 2,
    rating: 4,
    content:
      'The best IT consultant company, give a lot of discount and a good work presentation, i wanto to do a repeat order here, because this company do the best for me and i love it',
    author: {
      name: 'Suki Desu',
      role: 'CEO',
      imageUrl: '/pic2.png',
    },
  },
  {
    id: 3,
    rating: 5,
    content:
      'The best IT consultant company, give a lot of discount and a good work presentation, i wanto to do a repeat order here, because this company do the best for me and i love it',
    author: {
      name: 'Maria Zhao',
      role: 'CEO',
      imageUrl: '/pic1.png',
    },
  },
]
