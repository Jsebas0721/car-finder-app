# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Dealer.destroy_all
Car.destroy_all

user1= User.create(username: "test123", password: "test1234");

puts "users Seeded"

d1 = Dealer.create(name: "Clark Auto Group" , logo: "https://imagescdn.dealercarsearch.com/DealerImages/20958/saved/b2b0337b.png", location: "45 Main Street, New York, NY 10001");
d2 = Dealer.create(name: "35 Motor Exclusive Cars", logo: "https://images-platform.99static.com/-4TAvF9MUX9S43MUvrgRgtpZWG0=/185x185:1663x1663/500x500/top/smart/99designs-contests-attachments/84/84499/attachment_84499606", location: "56 Oak Avenue, Chicago, IL 60601" );
d3 = Dealer.create(name: "Golden Auto Store", logo: "https://dcassetcdn.com/design_img/3627766/722799/722799_20015073_3627766_3149a611_image.jpg" , location: "453 Elm Street, Los Angeles, CA 90001")
d4 = Dealer.create(name: "I.C.S.R International Car Sales", logo: "https://s.tmimgcdn.com/scr/1200x750/249300/icsr-automotive-car-dealer-logo_249332-original.jpg", location: "12 Maple Drive, Houston, TX 77001" )
d5 = Dealer.create(name: "Showcase Auto Sales", logo: "https://dypdvfcjkqkg2.cloudfront.net/large/2615659-1485.png" , location: "4 Cedar lane, Phoenix, FL 85001" )

puts"dealers Seeded "

Car.create([
    {
        make: "Toyota Camry",
        year: 2021,
        color: "Metal Grey",
        image: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/9eb880fa-f0d3-4471-8c23-547b5d1fb3a9/3fba41df-5999-4ad5-96dc-459b3f4b78ee.png",
        mileage: 5000, 
        price: 25000,
        user_id: user1.id,
        dealer_id: d1.id,
    },
    {
        make: "Mazda 3 ",
        year: 2022,
        color: "Red",
        image: "https://www.bagliermazda.com/blogs/2176/wp-content/uploads/2022/02/2022_Mazda3_Hatchback_Select.png",
        mileage: 3500, 
        price: 28000,
        user_id: user1.id,
        dealer_id: d1.id
    },
    {
        make: "Nissan Sentra",
        year: 2019,
        color: "White",
        image: "https://www.fmdt.info/vehicle/nissan/2019/sentra-32-white.png",
        mileage: 14500, 
        price: 22000,
        user_id: user1.id,
        dealer_id: d1.id
    },
    {
        make: "Ford Fusion",
        year: 2020,
        color: "Dark Grey",
        image: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/e27bf378-e3bb-496a-8695-2be5a93f2c97/63212197-d4f6-4ba0-ba69-b4aac4d6cf33.png",
        mileage: 9000, 
        price: 23000,
        user_id: user1.id,
        dealer_id: d2.id
    },
    {
        make: "Mazda 6",
        year: 2023,
        color: "White",
        image: "https://www.pngplay.com/wp-content/uploads/13/Mazda-6-PNG-Free-File-Download.png",
        mileage: 0, 
        price: 33000,
        user_id: user1.id,
        dealer_id: d2.id
    },
    {
        make: "Honda Accord",
        year: 2023,
        color: "Black",
        image: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/3e31-110007786/thumbnails/large/1HGCY2F52PA009437/3388e060f4dfd527db2d51d35630848c.png",
        mileage: 0, 
        price: 35000,
        user_id: user1.id,
        dealer_id: d2.id
    },
    {
        make: "Toyota RAV4",
        year: 2023,
        color: "Red",
        image: "https://www.buyatoyota.com/config/pub/3d/toyota/1008125/1000863/exterior/2/680_383_PNG/799de61d8963821d8b40ab87fcb1e918e6d8e0425280f8835106aefa0c15dec6.png",
        mileage: 1000, 
        price: 40000,
        user_id: user1.id,
        dealer_id: d3.id
    },
    {
        make: "Mercedes-Benz GLA",
        year: 2020,
        color: "Red",
        image: "https://images.dealer.com/evox/perspectives/14018/png/14018_31.png",
        mileage: 12000, 
        price: 45000,
        user_id: user1.id,
        dealer_id: d3.id
    },
    {
        make: "BMW X3",
        year: 2021,
        color: "Grey",
        image: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/faafad35-88a8-4b1d-91cb-ebe24cbb2f87/b6832218-c834-4ac6-b74b-8074a50dd489.png",
        mileage: 7000, 
        price: 50000,
        user_id: user1.id,
        dealer_id: d3.id
    },
    {
        make: "Chevrolet Corvette",
        year: 2022,
        color: "Blue",
        image: "https://www.cars.com/i/large/in/v2/stock_photos/5fc28f44-ec02-4496-9995-4d613dad127e/dc2b6933-41f7-44e3-b159-98542892c9f1.png",
        mileage: 500, 
        price: 75000,
        user_id: user1.id,
        dealer_id: d4.id
    }
])
puts "cars Seeded"

