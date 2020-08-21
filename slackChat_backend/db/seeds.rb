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
c1 = Channel.create(name:'Learn React')
c2 = Channel.create(name:'Job')
c3 = Channel.create(name:'Git Hub')
c4 = Channel.create(name:'Study Group')
c5 = Channel.create(name:'Oh`Oh`Oh`')
c6 = Channel.create(name:'Painting')
c7 = Channel.create(name:'Learn Something')
c8 = Channel.create(name:'Just Fun')
c9 = Channel.create(name:'Books')
c10 = Channel.create(name:'Map')

p1 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c1.id)
p2 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c2.id)
p3 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c3.id)
p4 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c4.id)
p5 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c5.id)
p6 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c6.id)
p7 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c7.id)
p8 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c8.id)
p9 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c9.id)
p10 = Post.create(content:'I joined', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: c10.id)

post1 = Post.create(content:'Hi', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post2 = Post.create(content:'How are you doing?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post3 = Post.create(content:'Great, this project is stressful though!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post4 = Post.create(content:'I am learning a ton about routes and stuff', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post5 = Post.create(content:'Same dude. I love react!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)

post6 = Post.create(content:'Hi', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post7 = Post.create(content:'How are you doing?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post8 = Post.create(content:'Great, this project is stressful though!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post9 = Post.create(content:'I am learning a ton about routes and stuff', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post10 = Post.create(content:'Same dude. I love react!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post11 = Post.create(content:'Hi', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post12 = Post.create(content:'How are you doing?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post13 = Post.create(content:'Great, this project is stressful though!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post14 = Post.create(content:'I am learning a ton about routes and stuff', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post15 = Post.create(content:'Same dude. I love react!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post16 = Post.create(content:'Hi', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post17 = Post.create(content:'How are you doing?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post18 = Post.create(content:'Great, this project is stressful though!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)
post19 = Post.create(content:'I am learning a ton about routes and stuff', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: hangout.id)
post20 = Post.create(content:'Same dude. I love react!', emoji:'', timestamp:'2020-8-17 20: 20', user_id: elsa.id, channel_id: hangout.id)

post21 = Post.create(content:'Did you find the horse you were looking for? What breed is it?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: equestrian.id)
post22 = Post.create(content:'Yes, I found an English thoroughbred.', emoji:'', timestamp:'2020-8-18 20: 35', user_id: elsa.id, channel_id: equestrian.id)
post23 = Post.create(content:'Few breeds, have traveled as far and as wide as the English thoroughbred animals have.', emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post24 = Post.create(content:'Did you know the average height of an English thoroughbred is between 15-17 hands?', emoji:'', timestamp:'2020-8-17 20: 30', user_id: elsa.id, channel_id: equestrian.id)
post25 = Post.create(content:'But of course! The exact bloodlines of the foundation sires is shrouded in mystery and hotly contested. It has always been believed that the two Arabians imported were of meticulously pure lines. However, pure Arabian horses were difficult to obtain due to political reasons & because good animals were only sold when necessary. Chances are the three foundation studs had bits of other genetic material in their makeup. The Godolphin Barb came directly from Morocco and was at first only used as a teaser and even after his value as a stud was proven, was not bred into the line as often as the Arabians.' , emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)

post26 = Post.create(content:'Did you find the horse you were looking for? What breed is it?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: equestrian.id)
post27 = Post.create(content:'Yes, I found an English thoroughbred.', emoji:'', timestamp:'2020-8-18 20: 35', user_id: elsa.id, channel_id: equestrian.id)
post28 = Post.create(content:'Few breeds, have traveled as far and as wide as the English thoroughbred animals have.', emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post29 = Post.create(content:'Did you know the average height of an English thoroughbred is between 15-17 hands?', emoji:'', timestamp:'2020-8-17 20: 30', user_id: elsa.id, channel_id: equestrian.id)
post30 = Post.create(content:'But of course! The exact bloodlines of the foundation sires is shrouded in mystery and hotly contested. It has always been believed that the two Arabians imported were of meticulously pure lines. However, pure Arabian horses were difficult to obtain due to political reasons & because good animals were only sold when necessary. Chances are the three foundation studs had bits of other genetic material in their makeup. The Godolphin Barb came directly from Morocco and was at first only used as a teaser and even after his value as a stud was proven, was not bred into the line as often as the Arabians.' , emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post31 = Post.create(content:'Did you find the horse you were looking for? What breed is it?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: equestrian.id)
post32 = Post.create(content:'Yes, I found an English thoroughbred.', emoji:'', timestamp:'2020-8-18 20: 35', user_id: elsa.id, channel_id: equestrian.id)
post33 = Post.create(content:'Few breeds, have traveled as far and as wide as the English thoroughbred animals have.', emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post34 = Post.create(content:'Did you know the average height of an English thoroughbred is between 15-17 hands?', emoji:'', timestamp:'2020-8-17 20: 30', user_id: elsa.id, channel_id: equestrian.id)
post35 = Post.create(content:'But of course! The exact bloodlines of the foundation sires is shrouded in mystery and hotly contested. It has always been believed that the two Arabians imported were of meticulously pure lines. However, pure Arabian horses were difficult to obtain due to political reasons & because good animals were only sold when necessary. Chances are the three foundation studs had bits of other genetic material in their makeup. The Godolphin Barb came directly from Morocco and was at first only used as a teaser and even after his value as a stud was proven, was not bred into the line as often as the Arabians.' , emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post36 = Post.create(content:'Did you find the horse you were looking for? What breed is it?', emoji:'', timestamp:'2020-8-17 20: 20', user_id: anna.id, channel_id: equestrian.id)
post37 = Post.create(content:'Yes, I found an English thoroughbred.', emoji:'', timestamp:'2020-8-18 20: 35', user_id: elsa.id, channel_id: equestrian.id)
post38 = Post.create(content:'Few breeds, have traveled as far and as wide as the English thoroughbred animals have.', emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
post39 = Post.create(content:'Did you know the average height of an English thoroughbred is between 15-17 hands?', emoji:'', timestamp:'2020-8-17 20: 30', user_id: elsa.id, channel_id: equestrian.id)
post40 = Post.create(content:'But of course! The exact bloodlines of the foundation sires is shrouded in mystery and hotly contested. It has always been believed that the two Arabians imported were of meticulously pure lines. However, pure Arabian horses were difficult to obtain due to political reasons & because good animals were only sold when necessary. Chances are the three foundation studs had bits of other genetic material in their makeup. The Godolphin Barb came directly from Morocco and was at first only used as a teaser and even after his value as a stud was proven, was not bred into the line as often as the Arabians.' , emoji:'', timestamp:'2020-8-17 20: 30', user_id: anna.id, channel_id: equestrian.id)
