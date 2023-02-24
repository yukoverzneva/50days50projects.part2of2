const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Maya Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGtvcmVhbiUyMHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    text: "Working with Julia Koverzneva is like having the best wicker basket you could ever dream of. She has the perfect combination of style, functionality and creativity that makes her an invaluable asset. Her baskets always look great and never fail to impress. I highly recommend her for all your wicker basket needs!",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo:
      "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGtvcmVhbiUyMHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    text: "I recently purchased a wicker basket from Julia Koverzneva and it was amazing! It was just the right size, beautifully crafted, and incredibly durable. Not only that, but Julia was extremely helpful in helping me choose the perfect basket for my needs. I would highly recommend her to anyone looking for a quality wicker basket.",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtvcmVhbiUyMG1hbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    text: "I have been using Julia Koverzneva's wicker baskets for several years now, and I cannot say enough about them. They are incredibly well-made and durable, yet lightweight. And the colors and designs she comes up with are absolutely stunning! Every time I use one of her baskets, it always brings a smile to my face. She is definitely the go-to source for high quality wicker baskets.",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo:
      "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    text: "I've been buying wicker baskets from Julia Koverzneva for years now and I can confidently say that she is the best. Her baskets are always of the highest quality and last for a long time. The prices are also very reasonable, so I'm never hesitant to buy from her. Julia's baskets are truly a work of art!",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    text: "I've been a customer of Julia Koverzneva's wicker baskets for over two years now and I can confidently say that they are the best quality wicker baskets I have ever seen. Not only are the designs beautiful, but they are also very durable and can last a long time. Julia is an amazing artist who puts her heart into each piece she creates. I highly recommend her work!",
  },
];
let i = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[i];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  i++;
  if (i > testimonials.length - 1) {
    i = 0;
  }
}
setInterval(updateTestimonial, 10000);
