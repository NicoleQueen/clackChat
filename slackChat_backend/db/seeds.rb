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


elsa = User.create(username:'Elsa', password:'123', email:'elsa_test@.gmail.com', img_url:'https://puui.qpic.cn/media_img/0/16104061581931753/0')
anna = User.create(username:'Anna', password:'123', email:'anna_test@.gmail.com', img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxE3aa3WLPV6b_XjhF2Hd7eMOUa9WUVt4zlA&usqp=CAU')

hangout = Channel.create(name:'Hangout')
equestrian = Channel.create(name:'Equestrian')

post1 = Post.create(content:'Hi', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post2 = Post.create(content:'How are you doing?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post3 = Post.create(content:'Great, this project is stressful though!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post4 = Post.create(content:'I am learning a ton about routes and stuff', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post5 = Post.create(content:'Same dude. I love react!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)

post6 = Post.create(content:'Did you find the horse you were looking for? What breed is it?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: equestrian.id)
post7 = Post.create(content:'Yes, I found an English thoroughbred.', emoji:'', timestamp:'2020-8-18 20: 35', user_id: elsa.id, channel_id: equestrian.id)
post8 = Post.create(content:'Few breeds, have traveled as far and as wide as the English thoroughbred animals have.', emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post9 = Post.create(content:'Did you know the average height of an English thoroughbred is between 15-17 hands?', emoji:'', timestamp:'2020-8-17 20: 30', user_id: elsa.id, channel_id: equestrian.id)
post10 = Post.create(content:'But of course! The exact bloodlines of the foundation sires is shrouded in mystery and hotly contested. It has always been believed that the two Arabians imported were of meticulously pure lines. However, pure Arabian horses were difficult to obtain due to political reasons & because good animals were only sold when necessary. Chances are the three foundation studs had bits of other genetic material in their makeup. The Godolphin Barb came directly from Morocco and was at first only used as a teaser and even after his value as a stud was proven, was not bred into the line as often as the Arabians.' , emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
