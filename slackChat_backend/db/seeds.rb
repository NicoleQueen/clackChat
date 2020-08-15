# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
Post.destroy_all

elsa = User.create(username:"Elsa", password:"123", email:"elsa_test@.gmail.com", img_url:"https://puui.qpic.cn/media_img/0/16104061581931753/0")
anna = User.create(username:"Anna", password:"123", email:"anna_test@.gmail.com", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxE3aa3WLPV6b_XjhF2Hd7eMOUa9WUVt4zlA&usqp=CAU")

hangout = Channel.create(name:"Hangout")
equestrian = Channel.create(name:"Equestrian")

post1 = Post.create(content:"Hi", emoji:"", timestamp:"", user_id: 3, channel_id: 3)
post2 = Post.create(content:"Although tired, I am very happy.", emoji:"", timestamp:"", user_id: 3, channel_id: 4)
post3 = Post.create(content:"How are you?", emoji:"", timestamp:"", user_id: 4, channel_id: 3)
post4 = Post.create(content:"Yes, I found an English thoroughbred.", emoji:"", timestamp:"", user_id: 4, channel_id: 4)