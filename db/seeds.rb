# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dealer.create(name: "Clark Auto Group" , logo: "https://imagescdn.dealercarsearch.com/DealerImages/20958/saved/b2b0337b.png", location: "45 Main Street, New York, NY 10001");
Dealer.create(name: "35 Motor Exclusive Cars", logo: "https://images-platform.99static.com/-4TAvF9MUX9S43MUvrgRgtpZWG0=/185x185:1663x1663/500x500/top/smart/99designs-contests-attachments/84/84499/attachment_84499606", location: "56 Oak Avenue, Chicago, IL 60601" );
Dealer.create(name: "Golden Auto Store", logo: "https://dcassetcdn.com/design_img/3627766/722799/722799_20015073_3627766_3149a611_image.jpg" , location: "453 Elm Street, Los Angeles, CA 90001")
Dealer.create(name: "I.C.S.R International Car Sales", logo: "https://s.tmimgcdn.com/scr/1200x750/249300/icsr-automotive-car-dealer-logo_249332-original.jpg", location: "12 Maple Drive, Houston, TX 77001" )
Dealer.create(name: "Showcase Auto Sales", logo: "https://dypdvfcjkqkg2.cloudfront.net/large/2615659-1485.png" , location: "4 Cedar lane, Phoenix, FL 85001" )

puts "Done Seeding"
