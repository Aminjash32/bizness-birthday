export type Memory = {
  id: number
  image: string
  caption: string
  note: string
  date?: string
}

// Replace the image paths with your own photos in public/images/memories/.
// Keep each image filename unique. Add or remove entries as you like.
export const memories: Memory[] = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/memories/memory-01.jpg`,
    caption: 'A little moment of magic',
    note: 'Some pictures have a way of making you pause and smile. This is definitely one of them.'
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/memories/memory-02.jpg`,
    caption: 'Simply, wonderfully you',
    note: 'No filters, no explanations. Just someone who has a way of making the world a little brighter.'
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/memories/memory-03.jpg`,
    caption: 'A smile worth remembering',
    note: 'There is something about a genuine smile that makes even the simplest moments unforgettable.'
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/memories/memory-04.jpg`,
    caption: 'Main character energy',
    note: 'A little confidence, a little charm, and a whole lot of personality. Never change that.'
  },
  {
    id: 5,
    image: `${import.meta.env.BASE_URL}images/memories/memory-05.jpg`,
    caption: 'A picture full of sunshine',
    note: 'Some people carry a certain warmth wherever they go. You happen to be one of them.'
  },
  {
    id: 6,
    image: `${import.meta.env.BASE_URL}images/memories/memory-06.jpg`,
    caption: 'Beautiful in your own way',
    note: 'Not just in the way you look, but in all the little things that make you who you are.'
  },
  {
    id: 7,
    image: `${import.meta.env.BASE_URL}images/memories/memory-07.jpg`,
    caption: 'A whole vibe of your own',
    note: 'Never quite like anyone else, and honestly, that is one of the nicest things about you.'
  },
  {
    id: 8,
    image: `${import.meta.env.BASE_URL}images/memories/memory-08.jpg`,
    caption: 'Just the right kind of sparkle',
    note: 'A little elegance, a little mischief, and a personality that deserves its own spotlight.'
  },
  {
    id: 9,
    image: `${import.meta.env.BASE_URL}images/memories/memory-09.jpg`,
    caption: 'A face full of stories',
    note: 'Every picture captures a little something different, but somehow they all have the same lovely charm.'
  },
  {
    id: 10,
    image: `${import.meta.env.BASE_URL}images/memories/memory-10.jpg`,
    caption: 'Keep being your kind of wonderful',
    note: 'Here is to more laughter, beautiful surprises, new adventures, and countless reasons to smile.'
  }

  // { id: 11, image: '/images/memories/memory-11.jpg', caption: 'Another little treasure', note: 'No grand occasion needed. I am grateful for memories just like this.' },
  // { id: 12, image: '/images/memories/memory-12.jpg', caption: 'Forever a classic', note: 'Some friendships just feel like a familiar, happy place. Ours is one of those.' },
  // { id: 13, image: '/images/memories/memory-13.jpg', caption: 'A snapshot of us', note: 'Thank you for being part of so many chapters of my story.' },
  // { id: 14, image: '/images/memories/memory-14.jpg', caption: 'More of this, please', note: 'Wishing us more catch-ups, more laughs and more pictures we will embarrass each other with.' },
  // { id: 15, image: '/images/memories/memory-15.jpg', caption: 'A memory with a smile', note: 'If I could bottle up the feeling of a good day with a good friend, it would look a little like this.' },
  // { id: 16, image: '/images/memories/memory-16.jpg', caption: 'Still one of my favourites', note: 'Some people make life softer just by being in it. Thank you for being that person.' },
  // { id: 17, image: '/images/memories/memory-17.jpg', caption: 'To the next adventure', note: 'The camera roll has room for plenty more memories with you.' },
  // { id: 18, image: '/images/memories/memory-18.jpg', caption: 'A little reminder', note: 'No matter how busy life gets, I never take this friendship for granted.' },
];
