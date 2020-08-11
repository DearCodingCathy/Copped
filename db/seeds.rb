# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

  @admin = User.create!(
    first_name: 'Admin',
    last_name: 'Secure',
    username: 'admin1',
    password: '12345678',
    bio: 'This is the admin account, enjoy the Copped app',
    img_url: 'https://i.imgur.com/cxMMwOC.jpg',
    email: 'admin@email.com'
  )

  @catherine = User.create!(
    first_name: 'Catherine',
    last_name: 'Balogun',
    username: 'dear.cathy',
    password: '123456',
    bio: 'Welcome to my profile! I am an up and coming sneaker head with A LOT of heat. check out my copped stories below',
    img_url: 'https://i.imgur.com/cxMMwOC.jpg',
    email: 'Cathy@email.com'
  )
  @mary = User.create!(
    first_name: 'Mary',
    last_name: 'Balogun',
    username: 'mary__B',
    password: '654321',
    bio: 'Mary here!',
    img_url:'https://i.imgur.com/cxMMwOC.jpg',
    email: 'mary@email.com'
  )

  @michael = User.create!(
    first_name: 'Michael',
    last_name: 'Balogun',
    username: 'Mikebss',
    password: '654321',
    bio: "It's ya boi Mike bss!",
    img_url: 'https://i.imgur.com/sXlpq4L.jpg',
    email: 'Mike@email.com'
  )

  @samson = User.create!(
    first_name: 'Samson',
    last_name: 'Balogun',
    username: 'kingbss',
    password: '654321',
    bio: 'Samson here!',
    img_url: 'https://i.imgur.com/wibo93v.jpg',
    email: 'Samson@email.com'
  )
  puts "#{User.count} users created"




  @post1 = Post.create!(
    title: "First ever Copped Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris a diam. Porta lorem mollis aliquam ut porttitor. Consequat id porta nibh venenatis cras sed. Vestibulum lectus mauris ultrices eros in. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Egestas dui id ornare arcu odio ut sem nulla. In pellentesque massa placerat duis ultricies lacus sed. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Euismod in pellentesque massa placerat duis ultricies lacus sed. Pretium fusce id velit ut. Commodo odio aenean sed adipiscing. Eros donec ac odio tempor orci dapibus ultrices. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.Blandit aliquam etiam erat velit. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Duis ultricies lacus sed turpis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Etiam erat velit scelerisque in dictum non. Fringilla ut morbi tincidunt augue interdum velit euismod. Risus nec feugiat in fermentum posuere urna nec tincidunt. Quis hendrerit dolor magna eget est lorem ipsum. Tincidunt lobortis feugiat vivamus at. Urna neque viverra justo nec ultrices dui sapien eget mi. Sit amet volutpat consequat mauris nunc congue nisi.A scelerisque purus semper eget duis at tellus. Non odio euismod lacinia at quis risus sed vulputate. Et leo duis ut diam quam nulla. ",
    img_url: 'https://i.imgur.com/jtibGkU.jpg',
    location: 'New York, NY',
    user_id: @admin.id
  )
  @post2 = Post.create!(
    title: 'The Craziest Cop',
    content:'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @catherine.id
  )
  @post3 = Post.create!(
    title: 'Sneaker Rehab',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @mary.id
  )
  @post4 = Post.create!(
    title: 'Keep or Sell?',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @michael.id
  )
  @post5 = Post.create!(
    title: "2020's greatest cop",
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @samson.id
  )
  @post6 = Post.create!(
    title: 'Lucky or Blessed?',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @catherine.id
  )
  @post7 = Post.create!(
    title: 'Forgot to name this Guy!',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @mary.id
  )
  @post8 = Post.create!(
    title: 'What is with me skipping 7 & 8',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @michael.id
  )
  @post9 = Post.create!(
    title: 'Boom and then I copped!',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @samson.id
  )
  @post10 = Post.create!(
    title: 'Stop the bots!',
    content: 'Netus et malesuada fames ac. Accumsan tortor posuere ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dictumst vestibulum rhoncus est pellentesque elit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Donec massa sapien faucibus et molestie ac feugiat. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Cursus metus aliquam eleifend mi in. At varius vel pharetra vel. Pretium lectus quam id leo in vitae. Amet mauris commodo quis imperdiet massa tincidunt. Dui faucibus in ornare quam. Semper auctor neque vitae tempus quam.',
    img_url: 'https://i.imgur.com/YspOJf4.jpg',
    location: 'New York, NY',
    user_id: @catherine.id
  )
  puts "#{Post.count} posts created"

  Comment.create!(
    content: "I got these too",
    user_id: @catherine.id,
    post_id: @post1.id
  )
  Comment.create!(
    content: "Ugh i wish I didn't pay resale",
    user_id: @mary.id,
    post_id: @post2.id
  )
  Comment.create!(
    content: "I love your content",
    user_id: @michael.id,
    post_id: @post3.id
  )
  Comment.create!(
    content: 'Best post on here, hands down',
    user_id: @samson.id,
    post_id: @post4.id
  )
  Comment.create!(
    content: "Have you tried the Sneakrs app?",
    user_id: @catherine.id,
    post_id: @post5.id
  )
  Comment.create!(
    content: "Soo lucky! can't wait to see some on feet pics",
    user_id: @mary.id,
    post_id: @post6.id
  )
  Comment.create!(
    content: "These are my favorite release this year",
    user_id: @michael.id,
    post_id: @post7.id
  )
  Comment.create!(
    content: 'I had to pass on these!',
    user_id: @samson.id,
    post_id: @post8.id
  )
  Comment.create!(
    content: "Your style is so dope, can't wait to see your furture pick ups",
    user_id: @catherine.id,
    post_id: @post9.id
  )
  Comment.create!(
    content: 'I used to be stricly a jordan fan,but you are changing my mind!',
    user_id: @mary.id,
    post_id: @post10.id
  )
  Comment.create!(
    content: 'These are definitely a vault shoe. Good pick up bro.',
    user_id: @michael.id,
    post_id: @post7.id
  )
  puts "#{Comment.count} comments created"