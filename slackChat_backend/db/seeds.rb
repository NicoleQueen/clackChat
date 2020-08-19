# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
Channel.destroy_all
User.destroy_all


elsa = User.create(username:"Elsa", password:"123", email:"elsa_test@.gmail.com", img_url:"https://puui.qpic.cn/media_img/0/16104061581931753/0")
anna = User.create(username:"Anna", password:"123", email:"anna_test@.gmail.com", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxE3aa3WLPV6b_XjhF2Hd7eMOUa9WUVt4zlA&usqp=CAU")

hangout = Channel.create(name:"Hangout")
equestrian = Channel.create(name:"Equestrian")

post1 = Post.create(content:"Hi", emoji:"", timestamp:"2020-8-17 20: 20", user_id: elsa.id, channel_id: hangout.id)
post2 = Post.create(content:"Although tired, I am very happy.", emoji:"", timestamp:"2020-8-17 20: 30", user_id: elsa.id, channel_id: equestrian.id)
post3 = Post.create(content:"How are you?", emoji:"", timestamp:"2020-8-18 20: 20", user_id: anna.id, channel_id: hangout.id)
post4 = Post.create(content:"Yes, I found an English thoroughbred.", emoji:"", timestamp:"2020-8-18 20: 35", user_id: anna.id, channel_id: equestrian.id)