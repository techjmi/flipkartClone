const products = [
    { 
        id: 'product1',
        order:1,
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        order:2,
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        quantity: 1,
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        order:3,
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        quantity: 1,
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        order:4,
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        quantity: 1,
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        order:5,
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        quantity: 1,
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        order:6,
        url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70', 
        title: {
            shortTitle: 'Table Fans',
            longTitle: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)'
        }, 
        price: {
            mrp: 2250,
            cost: 1199,
            discount: '46%'
        },
        quantity: 1,
        description: 'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
        discount: 'Minimum 40% Off', 
        tagline: 'Top Selling' 
    },
    { 
        id: 'product7',
        order:7,
        url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70', 
        title: {
            shortTitle: 'Headphones',
            longTitle: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset '
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        quantity: 1,
        description: 'Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.',
        discount: 'Minimum 50% Off', 
        tagline: 'Grab Now!' 
    },
    {
        id: 'product8',
        order:8,
        url: 'https://rukminim2.flixcart.com/image/832/832/kzhbfrk0/kurta/e/z/z/l-ns119sky-nishabd-original-imagbhchpwkzcwrv.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/kzhbfrk0/kurta/e/z/z/l-ns119sky-nishabd-original-imagbhchpwkzcwrv.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Cotton Casual Kurti'
        },
        price: {
            mrp: 899,
            cost: 599,
            discount: '33%'
        },
        quantity: 1,
        description: 'Stay comfortable and stylish with this casual cotton kurti. Ideal for everyday wear.',
        discount: 'Extra 5% Off',
        tagline: 'Bestseller'
    },
    {
        id: 'product9',
        order:9,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/0/z/w/7-bt-3410-shoetopia-brown-original-imagwwm9rtb7y67s.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/0/z/w/7-bt-3410-shoetopia-brown-original-imagwwm9rtb7y67s.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Classic Ankle Boots'
        },
        price: {
            mrp: 1599,
            cost: 1199,
            discount: '25%'
        },
        quantity: 1,
        description: 'Step out in style with these classic ankle boots. A versatile addition to your footwear collection.',
        discount: 'Flat 10% Off',
        tagline: 'Winter Essential'
    },
    {
        id: 'product10',
        order:10,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/v/n/m/m-03-printed-palazzo-areeba-collection-original-imag9p52tkkftpq9-bb.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/v/n/m/m-03-printed-palazzo-areeba-collection-original-imag9p52tkkftpq9-bb.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Printed Palazzo Pants'
        },
        price: {
            mrp: 1299,
            cost: 899,
            discount: '31%'
        },
        quantity: 1,
        description: 'Make a fashion statement with these trendy printed palazzo pants. Perfect for a stylish casual look.',
        discount: 'Extra 12% Off',
        tagline: 'Limited Edition'
    },
    {
        id: 'product11',
        order:11,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-dress/h/j/t/l-shopsy-f172-long-maxi-stylist-party-wear-printed-one-piece-original-imaggnx8kgck9agg.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-dress/h/j/t/l-shopsy-f172-long-maxi-stylist-party-wear-printed-one-piece-original-imaggnx8kgck9agg.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Summer Floral Dress'
        },
        price: {
            mrp: 1099,
            cost: 799,
            discount: '27%'
        },
        quantity: 1,
        description: 'Stay cool and chic in this summer floral dress. A perfect outfit for warm days and vacations.',
        discount: 'Extra 8% Off',
        tagline: 'Summer Vibes'
    },
    {
        id: 'product12',
        order:12,
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/y/x/i/stylish-travel-trendy-crossbody-shoulder-office-bag-for-unisex-original-imagzgzm9mmf2xhy.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/y/x/i/stylish-travel-trendy-crossbody-shoulder-office-bag-for-unisex-original-imagzgzm9mmf2xhy.jpeg?q=70',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Leather Crossbody Bag'
        },
        price: {
            mrp: 799,
            cost: 499,
            discount: '37%'
        },
        quantity: 1,
        description: 'Accessorize your look with this stylish leather crossbody bag. A practical and fashionable choice.',
        discount: 'Flat 15% Off',
        tagline: 'Must-Have Accessory'
    },
    {
        id: 'product13',
        order:13,
        url: 'https://rukminim2.flixcart.com/image/832/832/kxc5nrk0/blouse/n/d/r/free-sfb133-w-yoella-original-imag9tdra3cd6b7g.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/kxc5nrk0/blouse/n/d/r/free-sfb133-w-yoella-original-imag9tdra3cd6b7g.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Ruffled Sleeve Blouse'
        },
        price: {
            mrp: 1099,
            cost: 799,
            discount: '27%'
        },
        quantity: 1,
        description: 'Add a touch of femininity to your wardrobe with this elegant ruffled sleeve blouse. Perfect for formal occasions.',
        discount: 'Extra 8% Off',
        tagline: 'Classic Elegance'
    },
    {
        id: 'product14',
        order:14,
        url: 'https://rukminim2.flixcart.com/image/832/832/j6s7p8w0/necklace-chain/f/c/d/np548-necklace-high-trendz-original-imaexfwfppcycayy.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/j6s7p8w0/necklace-chain/f/c/d/np548-necklace-high-trendz-original-imaexfwfppcycayy.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Bohemian Style Necklace'
        },
        price: {
            mrp: 499,
            cost: 299,
            discount: '40%'
        },
        quantity: 1,
        description: 'Complete your boho look with this stylish bohemian necklace. A perfect accessory for a free-spirited style.',
        discount: 'Flat 20% Off',
        tagline: 'Boho Chic'
    },
    {
        id: 'product15',
        order:15,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sari/y/n/q/-original-imagnspt2rhmzqzf.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sari/y/n/q/-original-imagnspt2rhmzqzf.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Fashion',
            longTitle: 'Lycra Blend Saree'
        },
        price: {
            mrp: 1299,
            cost: 999,
            discount: '23%'
        },
        quantity: 1,
        description:'Classic Party Wear Sporting an embellished design with solid lace detail, the Monoria Embellished Bollywood Fancy Saree can make heads turn at every party. You can wear them to cocktail parties or wedding receptions to flaunt an effortless Bollywood look.',
        discount: 'Flat 10% Off',
        tagline: 'Active Lifestyle'
    },
    {
        id: 'product16',
        order:16,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Samsung 4K Smart LED TV (55 inches)'
        },
        price: {
            mrp: 24999,
            cost: 19999,
            discount: '20%'
        },
        quantity: 1,
        description: 'Immerse yourself in stunning visuals with this 4K Smart LED TV from Samsung. Enjoy your favorite shows and movies in high resolution.',
        discount: 'Extra 5% Off',
        tagline: 'Limited Stock'
    },
    {
        id: 'product17',
        order:17,
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
        title: {
            shortTitle: 'Apple iPhone 15',
            longTitle: 'Apple iPhone 15 (Black, 128 GB)'
        },
        price: {
            mrp: 79999,
            cost: 74999,
            discount: '6%'
        },
        quantity: 1,
        description: 'Experience the latest technology with the Apple iPhone 13. Capture stunning photos and enjoy powerful performance.',
        discount: 'No Cost EMI Available',
        tagline: 'New Launch'
    },
    {
        id: 'product18',
        order:18,
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/a/k/inspiron-7430-thin-and-light-laptop-dell-original-imagueh3s3tvpsgt.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/a/k/inspiron-7430-thin-and-light-laptop-dell-original-imagueh3s3tvpsgt.jpeg?q=70',
        title: {
            shortTitle: 'Dell Inspiron Laptop',
            longTitle: 'DELL Inspiron Intel Core i5 13th Gen 1335U - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 7430 Thin and Light Laptop  (14 Inch, Platinum Silver, 1.58 Kg, With MS Office)'
        },
        price: {
            mrp: 54999,
            cost: 47999,
            discount: '13%'
        },
        quantity: 1,
        description: 'Boost your productivity with the Dell Inspiron 14 Laptop. Powerful performance in a sleek and portable design.',
        discount: 'Exchange Offer Available',
        tagline: 'Bestseller'
    },
    {
        id: 'product19',
        order:19,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Sony WH-1000XM4 Wireless Headphones',
            longTitle: 'SONY WH-CH720N Active Noise Cancelling, 50 Hrs. Battery life, Multipoint Connection Bluetooth Headset  (Black, On the Ear)'
        },
        price: {
            mrp: 29999,
            cost: 24999,
            discount: '17%'
        },
        quantity: 1,
        description: 'Immerse yourself in high-quality audio with the Sony WH-1000XM4 Wireless Headphones. Perfect for music lovers and travelers.',
        discount: 'Extra 10% Off',
        tagline: 'Noise-Canceling Technology'
    },
    {
        id: 'product20',
        order:20,
        url: 'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
        title: {
            shortTitle: 'Canon EOS M50 Mark II Mirrorless Camera',
            longTitle: 'Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens  (Black)'
        },
        price: {
            mrp: 59999,
            cost: 52999,
            discount: '12%'
        },
        quantity: 1,
        description: 'Capture stunning photos and videos with the Canon EOS M50 Mark II Mirrorless Camera. Perfect for photography enthusiasts.',
        discount: 'Free Camera Bag Included',
        tagline: 'Professional Photography'
    },
    {
        id: 'product21',
        order:21,
        url: 'https://rukminim2.flixcart.com/image/832/832/ksxjs7k0/smartwatch/1/0/p/android-sm-r885fzsainu-samsung-yes-original-imag6dtgzz3acqac.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/ksxjs7k0/smartwatch/1/0/p/android-sm-r885fzsainu-samsung-yes-original-imag6dtgzz3acqac.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Samsung Galaxy Watch 4',
            longTitle: 'SAMSUNG Watch 4 Classic, 42mm Super AMOLED LTE Calling with Body Composition Tracking  (Silver Strap, Free Size)'
        },
        price: {
            mrp: 19999,
            cost: 17999,
            discount: '10%'
        },
        quantity: 1,
        description: 'Stay connected and track your fitness with the Samsung Galaxy Watch 4. A sleek and feature-packed smartwatch.',
        discount: 'EMI Options Available',
        tagline: 'Smart Fitness Companion'
    },
    {
        id: 'product22',
        order:22,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/soundbar/t/w/q/spk8-s-lg-original-imagw5wyr5fr2pfv.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/soundbar/t/w/q/spk8-s-lg-original-imagw5wyr5fr2pfv.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'LG 2.1 Channel Soundbar',
            longTitle: 'LG SPK8-S 140 W Bluetooth Soundbar  (Black, 2.0 Channel)'
        },
        price: {
            mrp: 8999,
            cost: 6999,
            discount: '22%'
        },
        quantity: 1,
        description: 'Enhance your audio experience with the LG 2.1 Channel Soundbar. Enjoy immersive sound with a wireless subwoofer.',
        discount: 'Limited Time Offer',
        tagline: 'Home Theater Experience'
    },
    {
        id: 'product23',
        order: 23,
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/4/l/l-frml-st2-vebnor-original-imagqwy4whxwz2dg.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/4/l/l-frml-st2-vebnor-original-imagqwy4whxwz2dg.jpeg?q=70',
        title: {
            shortTitle: 'Men\'s Formal Shirt',
            longTitle: 'Classic Striped Men\'s Formal Shirt'
        },
        price: {
            mrp: 1499,
            cost: 799,
            discount: '47%'
        },
        quantity: 1,
        description: 'A classic striped formal shirt for men, perfect for office wear and formal occasions.',
        discount: 'Extra 10% Off',
        tagline: 'Limited Stock'
    },
    {
        id: 'product24',
        order: 24,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/n/i/-original-imagg5r9at3rfpdq.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/n/i/-original-imagg5r9at3rfpdq.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Men\'s Sneakers',
            longTitle: 'Casual High-Top Men\'s Sneakers'
        },
        price: {
            mrp: 1899,
            cost: 1299,
            discount: '32%'
        },
        quantity: 1,
        description: 'Casual high-top sneakers for men, stylish and comfortable for everyday wear.',
        discount: 'Flat 15% Off',
        tagline: 'New Arrivals'
    },
    {
        id: 'product25',
        order: 25,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/k/e/-original-imagnydrewxe5qeg.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/k/e/-original-imagnydrewxe5qeg.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Men\'s Watch',
            longTitle: 'Elegant Analog Men\'s Watch'
        },
        price: {
            mrp: 2499,
            cost: 1799,
            discount: '28%'
        },
        quantity: 1,
        description: 'An elegant analog watch for men, perfect for both formal and casual occasions.',
        discount: 'Flat 20% Off',
        tagline: 'Best Seller'
    },
    {
        id: 'product26',
        order: 26,
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/b/j/p/m-1-no-pjjkptkp235448-peter-england-original-imaguw9v9up2nhvp.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/b/j/p/m-1-no-pjjkptkp235448-peter-england-original-imaguw9v9up2nhvp.jpeg?q=70',
        title: {
            shortTitle: 'Men\'s Denim Jacket',
            longTitle: 'Stylish Ripped Denim Jacket for Men'
        },
        price: {
            mrp: 1699,
            cost: 1199,
            discount: '29%'
        },
        quantity: 1,
        description: 'Stylish ripped denim jacket for men, a trendy addition to your casual wardrobe.',
        discount: 'Extra 15% Off',
        tagline: 'Limited Edition'
    },
    {
        id: 'product27',
        order: 27,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/a/0/w/-original-imagrdzcgbdgfayf.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/a/0/w/-original-imagrdzcgbdgfayf.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Men\'s Backpack',
            longTitle: 'Durable Laptop Backpack for Men'
        },
        price: {
            mrp: 1299,
            cost: 899,
            discount: '31%'
        },
        quantity: 1,
        description: 'Durable laptop backpack for men, spacious and perfect for daily use or travel.',
        discount: 'Flat 25% Off',
        tagline: 'Limited Stock'
    },
    {
        id: 'product28',
        order: 28,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/n/w/-original-imagg3aaskgnqg6x.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/n/w/-original-imagg3aaskgnqg6x.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Men\'s Formal Shoes',
            longTitle: 'Classic Leather Men\'s Formal Shoes'
        },
        price: {
            mrp: 1999,
            cost: 1499,
            discount: '25%'
        },
        quantity: 1,
        description: 'Classic leather formal shoes for men, comfortable and perfect for formal occasions.',
        discount: 'Extra 12% Off',
        tagline: 'Best Seller'
    },
    {
        id: 'product29',
        order: 29,
        url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/xif0q/t-shirt/y/v/f/-bg-enhanced-original-imagtvbfhafgx23d.jpeg?q=70&crop=true',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/xif0q/t-shirt/y/v/f/-bg-enhanced-original-imagtvbfhafgx23d.jpeg?q=70&crop=true',
        title: {
            shortTitle: 'Men\'s Polo T-Shirt',
            longTitle: 'Casual Cotton Men\'s Polo T-Shirt (Pack of 2)'
        },
        price: {
            mrp: 899,
            cost: 599,
            discount: '33%'
        },
        quantity: 1,
        description: 'A pack of two casual cotton men\'s polo t-shirts, comfortable and perfect for a casual look.',
        discount: 'Extra 8% Off',
        tagline: 'New Arrivals'
    }
]
module.exports= products