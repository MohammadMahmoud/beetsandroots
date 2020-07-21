const products = {
  devices: [
    {
      title: 'SAMSUNG Galaxy S10, 128 GB, Prism Black',
      brand: 'Samsung',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80531186/fee_786_587_png/SAMSUNG-Galaxy-S10--128-GB--Prism-Black',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71806003/fee_x_25_png/SAMSUNG',
      specifications: {
        display: '15.51 cm / 6.1 Zoll',
        resultion: '3.040 x 1.440 Pixel',
        os: 'Android 9',
        processor: 'Exynos 9820',
        camera:
          '12 Megapixel (Weitwinkel), 16 Megapixel (Ultra-Weitwinkel), 12 Megapixel (Tele)',
      },
    },
    {
      title: 'APPLE iPhone SE, 64 GB, Schwarz',
      brand: 'Apple',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74275225/fee_786_587_png/APPLE-iPhone-SE--64-GB--Schwarz',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-59891242/fee_x_25_png/APPLE',
      specifications: {
        display: '11.94 cm / 4.7 Zoll',
        resultion: '1.334 x 750 Pixel',
        os: 'iOS 13',
        processor: 'A13 Bionic Chip',
        camera: '7 Megapixel',
      },
    },
    {
      title: 'SAMSUNG Galaxy S20+, 128 GB, Cosmic Black',
      brand: 'Samsung',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72696026/fee_786_587_png/SAMSUNG-Galaxy-S20---128-GB--Cosmic-Black',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71806003/fee_x_25_png/SAMSUNG',
      specifications: {
        display: '16.95 cm / 6.7 Zoll',
        resultion: '3.200 x 1.440 Pixel',
        os: 'Android 10.0 One UI 2.0 Knox 3.5',
        processor: 'Exynos 990',
        camera:
          '12 Megapixel (Weitwinkel) + 12 Megapixel (Ultra-Weitwinkel) + 64 Megapixel (Tele)',
      },
    },
    {
      title: 'SAMSUNG Galaxy A51, 128 GB, Prism Crush Black',
      brand: 'Samsung',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72255536/fee_786_587_png/SAMSUNG-Galaxy-A51--128-GB--Prism-Crush-Black',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71806003/fee_x_25_png/SAMSUNG',
      specifications: {
        display: '16.40 cm / 6.5 Zoll',
        resultion: '2.400 x 1.080 Pixel',
        os: 'Android 10.0 + One UI 2.0 + Knox 3.4.1',
        processor: 'Exynos 9611',
        camera:
          '48 Megapixel (Weitwinkel), 12 Megapixel (Ultra-Weitwinkel), 5 Megapixel (für Bokeh-Effekt), 5 Megapixel (Makro)',
      },
    },
    {
      title: 'APPLE iPhone 8 Plus, 64 GB, Gold',
      brand: 'Apple',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76131315/fee_786_587_png/APPLE-iPhone-8-Plus--64-GB--Gold',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-59891242/fee_x_25_png/APPLE',
      specifications: {
        display: '13.94 cm / 5.5 Zoll',
        resultion: '1.920 x 1.080 Pixel',
        os: 'iOS 11',
        processor: 'A11 Bionic mit M11 Coprozessor',
        camera: '7 Megapixel',
      },
    },
    {
      title: 'APPLE iPhone XS, 256 GB, Space Gray',
      brand: 'Apple',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78450175/fee_786_587_png/APPLE-iPhone-XS--256-GB--Space-Gray',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-59891242/fee_x_25_png/APPLE',
      specifications: {
        display: '14.7 cm / 5.8 Zoll',
        resultion: '2.436 x 1.125 Pixel',
        os: 'iOS 12',
        processor: 'A12 Bionic',
        camera: '12 Megapixel + 12 Megapixel',
      },
    },
    {
      title: 'APPLE iPhone 11 Pro Max, 256 GB, Gold',
      brand: 'Apple',
      price: Math.floor(Math.random() * (1000 - 500 + 1)) + 500,
      rated: Math.floor(Math.random() * 5),
      productImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82228325/fee_786_587_png/APPLE-iPhone-11-Pro-Max--256-GB--Gold',
      brandImageUrl:
        'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-59891242/fee_x_25_png/APPLE',
      specifications: {
        display: '16.5 cm / 6.5 Zoll',
        resultion: '2.688 x 1.242 Pixel',
        os: 'iOS 13',
        processor: 'A13 Bionic Chip',
        camera:
          '12 Megapixel Dreifach-Kamera mit Ultraweitwinkel‑, Weitwinkel‑ und Teleobjektiv',
      },
    },
  ],
  devicesBrands: ['Apple', 'Samsung'],
};

export default products;
